var table = document.querySelector('.table')
var cryptoTable = new CryptoTable(table)
var header = document.querySelector('header')
var fearIndex = new FearIndex(header)


var app = new App(cryptoTable);
app.getCrypto()
var app1 = new App1(fearIndex);
app1.getFearIndex()
