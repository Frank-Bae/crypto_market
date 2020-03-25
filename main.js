var table = document.querySelector('.table')
var cryptoTable = new CryptoTable(table)
var header = document.querySelector('header')
var fearIndex = new FearIndex(header)
var headerHistory = document.querySelector('header')
var fearIndexHistory = new FearIndexHistory(headerHistory)

var app = new App(cryptoTable);
app.getCrypto()
var app1 = new App1(fearIndex, fearIndexHistory);
app1.getFearIndex()
app1.getFearIndexHistory()
