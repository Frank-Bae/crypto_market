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
      var tdName = document.createElement('td')
      tdName.textContent = data.Data[i].CoinInfo.Name
      var tdPrice = document.createElement('td')
      tdPrice.textContent = data.Data[i].DISPLAY.USD.PRICE
      var tdMarketCap = document.createElement('td')
      tdMarketCap.textContent = data.Data[i].DISPLAY.USD.MKTCAP


      tr.appendChild(tdRank)
      tr.appendChild(tdName)
      tr.appendChild(tdPrice)
      tr.appendChild(tdMarketCap)


      tbody.appendChild(tr)
    }

  }

}
