var table = document.querySelector('.table')
var cryptoTable = new CryptoTable(table)


var app = new App(cryptoTable);
app.getCrypto()
