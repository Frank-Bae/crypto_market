var table = document.querySelector('.table')
var cryptoTable = new CryptoTable(table)
var headerFear = document.querySelector('.fear')
var fearIndex = new FearIndex(headerFear)
var fearHistory = document.querySelector('.fear-history')
var fearIndexHistory = new FearIndexHistory(fearHistory)

var app = new App(cryptoTable);
app.getCrypto()
var app1 = new App1(fearIndex, fearIndexHistory);
app1.getFearIndex()
app1.getFearIndexHistory()
