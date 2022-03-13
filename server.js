// Visit this page for detailed information
// http://asprise.com/receipt-ocr/blog-github-javascript_js-receipt-ocr-api

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


console.log("=== JavaScript/Node.js Receipt OCR ===");

var receiptOcrEndpoint = 'http://ocr2.asprise.com/api/v1/receipt';
var imageFile = 'download.jpg'; // Modify it to use your own file

var fs = require('fs');
var request = require('request');
request.post({
    url: receiptOcrEndpoint,
    formData: {
        client_id: 'TEST',        // Use 'TEST' for testing purpose
        recognizer: 'auto',        // can be 'US', 'CA', 'JP', 'SG' or 'auto'
        ref_no: 'ocr_nodejs_123', // optional caller provided ref code
        file: fs.createReadStream(imageFile) // the image file
    },
}, function (error, response, body) {
    if (error) {
        console.error(error,"dd");
    }
    console.log(body); // Receipt OCR result in JSON
});
app.listen(port, () => {
    console.log(`is listening at port ${port}`);
});