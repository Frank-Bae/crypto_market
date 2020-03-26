class CryptoTable {
  constructor(_tableElement) {
    this.tableElement = _tableElement;
  }
  updateTable(data){
    var tbody = this.tableElement.querySelector('tbody')
    for(var i = 0; i < data.Data.length; i++){
      var tr = document.createElement('tr')


      var tdRank = document.createElement('td')
      tdRank.textContent = i+1

      var tdSymbol = document.createElement('td')
      var symbol = document.createElement('img')
      symbol.setAttribute("src", "https://www.cryptocompare.com/" + data.Data[i].CoinInfo.ImageUrl)
      tdSymbol.appendChild(symbol)
      console.log(symbol)

      var name = document.createElement('span')
      name.textContent = data.Data[i].CoinInfo.FullName
      tdSymbol.appendChild(name)

      // var tdName = document.createElement('td')
      // tdName.textContent = data.Data[i].CoinInfo.FullName

      // tdName.appendChild(symbol)





      var tdPrice = document.createElement('td')
      tdPrice.textContent = data.Data[i].DISPLAY.USD.PRICE
      var tdMarketCap = document.createElement('td')
      tdMarketCap.textContent = data.Data[i].DISPLAY.USD.MKTCAP
      var topTierVol = document.createElement('td')
      topTierVol.textContent = data.Data[i].DISPLAY.USD.TOTALTOPTIERVOLUME24HTO


      tr.appendChild(tdRank)
      tr.appendChild(tdSymbol)
      tr.appendChild(tdPrice)
      tr.appendChild(tdMarketCap)
      tr.appendChild(topTierVol)


      tbody.appendChild(tr)
    }

  }
}

class FearIndex {
  constructor(_headerElement) {
    this.headerElement = _headerElement;
  }
  updateHeader(data1){
    var pValue = this.headerElement.querySelector('.value')
    pValue.textContent = "Crypto Fear/Greed Index: (" + data1.data[0].value +")"

    var pSentiment = this.headerElement.querySelector('.sentiment')
    pSentiment.textContent = "Sentiment: " + data1.data[0].value_classification

  }
}

class FearIndexHistory {
  constructor(_headerElement1) {
    this.headerElement1 = _headerElement1;
  }
  updateHeader1(data2){
    var pYesterday = this.headerElement1.querySelector('.yesterday')
    pYesterday.textContent = "Yesterday: (" + data2.data[1].value + ") " + data2.data[1].value_classification
    var pLastWeek = this.headerElement1.querySelector('.last-week')
    pLastWeek.textContent = "Last Week (" + data2.data[6].value + ") " + data2.data[6].value_classification
    var pLastMonth = this.headerElement1.querySelector('.last-month')
    pLastMonth.textContent = "Last Month (" + data2.data[30].value + ") " + data2.data[30].value_classification

  }
}

// var timeStampYesterday = data2.data[1].timestamp
// var timestamp = Number(new Date(timeStampYesterday * 1000))
// var date = new Date(timestamp)
// console.log(date)
