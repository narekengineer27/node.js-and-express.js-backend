import aws from "aws-sdk";
import multerS3 from "multer-s3";
import multer from "multer";
const path = require("path");
import config from "../config/settings";

const s3 = new aws.S3({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
  bucket: config.aws.bucket
});

/**
 * Images Upload
 */
const avatarUploader = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.aws.bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function(req, file, cb) {
      const fname =
        path.basename(file.originalname, path.extname(file.originalname)) +
        "-" +
        Date.now() +
        path.extname(file.originalname);
      cb(null, fname);
    }
  }),
  limits: { fileSize: config.uploadFileMaxSize }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("avatar");
/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType(file, cb) {
  const filetypes = /|jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Upload Images Only!");
  }
}

module.exports = {
  avatarUploader
};
