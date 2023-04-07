const fs = require("fs");
const path = require("path");

const certData = {
	cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
	key: fs.readFileSync(path.join(__dirname, "key.pem")),
};

module.exports = certData;
