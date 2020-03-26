var table = document.querySelector('table')
var cryptoTable = new CryptoTable(table)

var headerFear = document.querySelector('.fear')
var fearIndex = new FearIndex(headerFear)

var fearHistory = document.querySelector('.fear-history')
var fearIndexHistory = new FearIndexHistory(fearHistory)


var appTable = new AppTable(cryptoTable);
appTable.getCrypto()

var button = document.querySelector('.btn')
button.addEventListener('click', function(){
  var tbody = document.querySelector('tbody')
  tbody.innerHTML = ""
  var refresh = new AppTable(cryptoTable)
  refresh.getCrypto()
})


var appHeader = new AppHeader(fearIndex, fearIndexHistory);
appHeader.getFearIndex()
appHeader.getFearIndexHistory()
