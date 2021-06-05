import models, { sequelize } from "../../../models";
import fs, { statSync } from 'fs';
import aws from "aws-sdk";
import PDFDocument from 'pdfkit';
import nodemailer from "nodemailer";
import config from "../../config/settings";
import AdmZip from 'adm-zip';
import path from 'path';

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "Payment is due within 15 days. Thank you for your business.",
      50,
      650,
      { align: "center", width: 500 }
    );
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

function generateHeader(doc) {
  doc
    .image("logo.png", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(10)
    .text("PlastPlace", 200, 50, { align: "right" })
    .text("Lyoner Str. 19", 200, 65, { align: "right" })
    .text("Frankfurt am Main, 60528", 200, 80, { align: "right" })
    .moveDown();
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Invoice", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;
  const currencyUnicode = invoice.Order.Listing.Country.Currency.unicode;
  doc
    .fontSize(10)
    .text("Invoice Number:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.invoiceNumber, 150, customerInformationTop)
    .font("Helvetica")
    .text("Invoice Date:", 50, customerInformationTop + 15)
    .text(formatDate(new Date()), 150, customerInformationTop + 15)
    .text("Balance Due:", 50, customerInformationTop + 30)
    .text(
      currencyUnicode + ' ' + invoice.fee,
      150,
      customerInformationTop + 30
    )
    .font("Helvetica-Bold")
    .text(invoice.User.first_name + ' ' + invoice.User.last_name, 300, customerInformationTop)
    .font("Helvetica")
    .text(invoice.User.Company.formatted_address, 300, customerInformationTop + 15)
    .moveDown();
  generateHr(doc, 252);

}

function generateListingDetail(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Material", 50, 285);

  generateHr(doc, 310);

  const listingDetailTop = 315;
  const unit = invoice.Order.Listing.unit === "mt" ? "t" : invoice.Order.Listing.unit
  doc
    .fontSize(10)
    .text("Title", 50, listingDetailTop)
    .font("Helvetica-Bold")
    .text(invoice.Order.Listing.title, 150, listingDetailTop)
    .font("Helvetica")
    .text("Category", 50, listingDetailTop + 15)
    .text(invoice.Order.Listing.Category.name, 150, listingDetailTop + 15)
    .text("Condition", 50, listingDetailTop + 30)
    .text(invoice.Order.Listing.Condition.name, 150, listingDetailTop + 30)
    .text("Quantity", 50, listingDetailTop + 45)
    .text(invoice.Order.Listing.quantity + '' + unit, 150, listingDetailTop + 45)
    .text("Supply", 50, listingDetailTop + 60)
    .text(invoice.Order.Listing.supply, 150, listingDetailTop + 60)
    .text("Pricing terms", 50, listingDetailTop + 75)
    .text(invoice.Order.Listing.PricingTerm.name, 150, listingDetailTop + 75)
    .text("Location", 50, listingDetailTop + 90)
    .text(
      `${invoice.Order.Listing.address}, ${invoice.Order.Listing.city}, ${invoice.Order.Listing.zipcode}, ${invoice.Order.Listing.Country.name}`,
      150,
      listingDetailTop + 90
    );

  generateHr(doc, 420);

  const priceDetailTop = 435;
  const orderVolume = invoice.Order.Listing.pricePerUnit * invoice.Order.Listing.quantity;
  const currencyUnicode = invoice.Order.Listing.Country.Currency.unicode;

  doc
    .fontSize(15)
    .font("Helvetica")
    .text(`Price/${unit}`, 50, priceDetailTop)
    .text(`${currencyUnicode} ${invoice.Order.Listing.pricePerUnit}`, 350, priceDetailTop, { align: "right" })
    .text(`Order Volume`, 50, priceDetailTop + 20)
    .text(`${currencyUnicode} ${orderVolume}`, 350, priceDetailTop + 20, { align: "right" })
    .font("Helvetica-Bold")
    .text("Fee", 50, priceDetailTop + 40)
    .text(`${currencyUnicode} ${invoice.fee}`, 350, priceDetailTop + 40, { align: "right" })
    .moveDown();
}

async function sendEmail(to, url) {
  try {
    let transporter = nodemailer.createTransport({
      host: config.email.server,
      port: 587,
      secure: false,
      auth: {
        user: config.email.user,
        pass: config.email.pass
      }
    });

    const mailOptions = {
      from: config.email.from,
      to: to,
      subject: "Invoice",
      text: "",
      html: `here is a url for your invoice<br/> ${url}`
    };

    transporter.sendMail(mailOptions);
  } catch (e) {
    throw e;
  }
}

async function createInvoiceAndSendEmail(invoice) {
  try {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateListingDetail(doc, invoice);
    generateFooter(doc);

    const dir = 'temp';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const invoicePath = `temp/${invoice.invoiceNumber}.pdf`;
    const invoiceFileName = `${invoice.invoiceNumber}.pdf`;

    doc.end();

    const file = fs.createWriteStream(invoicePath);
    doc.pipe(file);

    const s3 = new aws.S3({
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
      region: config.aws.region,
      bucket: config.aws.bucket
    });


    const invoiceUrl = await readAndUploadToS3AfterWriting(file, s3, invoiceFileName, invoicePath);
    await invoice.update({ url: invoiceUrl });
    await sendEmail(invoice.User.email, invoiceUrl);

    let fileNames = await downloadListingFiles(invoice.Order.Listing.ListingFiles, s3);
    fileNames.push(invoiceFileName);
    const zippedFileName = `${invoice.invoiceNumber}.zip`;
    await newArchive(`temp/${invoice.invoiceNumber}.zip`, fileNames);

    const zipUrl = await readFileAndUploadToS3(zippedFileName, s3);
    await invoice.update({ zipUrl });
    const directory = 'temp';
    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });
    return zipUrl;
  } catch (e) {
    throw e;
  }
}

async function readFileAndUploadToS3(fileName, s3) {
  return new Promise((resolve, reject) => {
    fs.readFile(`temp/${fileName}`, function (err, data) {
      if (err) {
        reject();
      }
      s3.putObject({
        ACL: 'public-read',
        Bucket: config.aws.bucket,
        Key: fileName,
        Body: data,
        ContentType: 'application/zip'
      }, async function (error, response) {
        if (error) {
          reject();
        }
        else {
          const url = `https://s3.amazonaws.com/${config.aws.bucket}/${fileName}`;
          resolve(url);
        }
      });
    });
  });
}
async function newArchive(zipFileName, fileNames) {

  return new Promise((resolve, reject) => {
    const zip = new AdmZip();

    fileNames.forEach(fileName => {
      zip.addLocalFile(`temp/${fileName}`);
    });
    zip.writeZip(zipFileName, function (err) {
      if (err) reject();
      else resolve();
    });
  })
}

async function downloadListingFiles(listingFiles, s3) {
  try {
    const fileNames = await Promise.all(
      listingFiles.map(async listingFile => {
        const fileName = listingFile.url.substr(listingFile.url.lastIndexOf('/') + 1);
        const file = fs.createWriteStream(`temp/${fileName}`);
        s3.getObject({ Bucket: config.aws.bucket, Key: fileName }).createReadStream().pipe(file);
        await untilSaving(file);
        return fileName;
      })
    );
    return fileNames;
  } catch (e) {
    throw e;
  }
}

async function untilSaving(file) {
  return new Promise(async (resolve, reject) => {
    file.on('finish', () => {
      resolve();
    });
  })
}

async function readAndUploadToS3AfterWriting(file, s3, fileName, filePath) {
  return new Promise((resolve, reject) => {
    file.on('finish', () => {
      file.close();
      fs.readFile(filePath, function (err, data) {
        if (err) {
          reject();
        }
        s3.putObject({
          ACL: 'public-read',
          Bucket: config.aws.bucket,
          Key: fileName,
          Body: data,
          ContentType: 'application/pdf'
        }, async function (error, response) {
          if (error) {
            reject();
          }
          else {
            const url = `https://s3.amazonaws.com/${config.aws.bucket}/${fileName}`;
            resolve(url);
          }
        });
      });
    })
  });
}

async function process(invoiceId) {

  try {
    const invoice = await models.Invoice.findByPk(invoiceId, {
      include: [
        {
          model: models.Order,
          include: [
            { model: models.User, as: 'Buyer' },
            { model: models.User, as: 'Seller' },
            {
              model: models.Listing,
              include: [
                { model: models.Category },
                { model: models.Condition },
                { model: models.PricingTerm },
                {
                  model: models.Country,
                  include: [
                    {
                      model: models.Currency,
                    }
                  ]
                },
                { model: models.ListingFile }
              ]
            }
          ]
        },
        {
          model: models.User,
          include: [
            { model: models.Company }
          ]
        }
      ]
    });
    return await createInvoiceAndSendEmail(invoice);
  } catch (e) {
    throw e;
  }
}

module.exports = {
  process
};
