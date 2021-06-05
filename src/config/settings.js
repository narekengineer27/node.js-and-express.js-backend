module.exports = {
  server: {
    port: 8000
  },
  security: {
    salt: "thesupersecrecodegoeshere"
  },
  aws: {
    bucket: 'plastplace',
    accessKeyId: 'AKIA5TFCHVFPA6GTI446',
    secretAccessKey: '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',
    region: 'us-east-2'
  },
  uploadFileMaxSize: 20000000,
  email: {
    from: 'noreply@plastplace.de',
    server: 'w019956d.kasserver.com',
    port: 587,
    user: 'noreply@plastplace.de',
    pass: 'fPeMEXc6hyzUFSuA'
  },
  googleMap: 'AIzaSyCADKhd4e3xBCZilWt8uyS2z3apawepYC0',
  plaid: {
    clientId: '5df7df9d107d16001250f080',
    secret: 'a649388190c9653e0f626e7429849b',
    publicKey: '46923219a05f961da87192bc5c2035',
    product: ['auth'],
    countryCodes: 'US,CA,GB,FR,ES,IE',
    env: 'sandbox'
  },
  stripe: {
    publishableKey: 'pk_test_0j2sss1kQElXcMnrOXaC5G4N00CY01d8tf',
    secretKey: 'sk_test_TO8WglgiMhMwXtf9MwcRiQsF00LpZHn5ll'
  }
};
