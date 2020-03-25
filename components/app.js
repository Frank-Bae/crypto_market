
class App {
  constructor(cryptoTable){
    this.cryptoTable = cryptoTable;
    this.handleGetCryptoSuccess = this.handleGetCryptoSuccess.bind(this);
    this.handleGetCryptoError = this.handleGetCryptoError.bind(this);
  }
  getCrypto(){
    $.ajax({
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=50&tsym=USD&api_key=32bcf25de42cdc2dfce6176731239556beb85906a5566e11ed8eb43e9b827aca",
      success: this.handleGetCryptoSuccess,
      error: this.handleGetCryptoError
    })
  }
  handleGetCryptoSuccess(data){
    this.cryptoTable.updateTable(data)
  }
  handleGetCryptoError(error){
    console.error(error)
  }
}

class App1 {
  constructor(_fearIndex){
    this.fearIndex = _fearIndex;
    this.handleFearIndexSuccess = this.handleFearIndexSuccess.bind(this);
    this.handleFearIndexError = this.handleFearIndexError.bind(this);
    this.handleFearIndexHistorySuccess = this.handleFearIndexHistorySuccess.bind(this);
    this.handleFearIndexHistoryError = this.handleFearIndexHistoryError.bind(this)
  }
  getFearIndex(){
    $.ajax({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://api.alternative.me/fng/",
      success: this.handleFearIndexSuccess,
      error: this.handleFearIndexError
    })
  }
  handleFearIndexSuccess(data1){
    this.fearIndex.updateHeader(data1)
  }
  handleFearIndexError(error1){
    console.error(error1)
  }
  getFearIndexHistory(){
    $.ajax({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://api.alternative.me/fng/?limit=10",
      success: this.handleFearIndexHistorySuccess,
      error: this.handleFearIndexhistoryError
    })
  }
  handleFearIndexHistorySuccess(data2){

    var timestamp = Number(new Date(1585108800 *1000))
    var date = new Date(timestamp)
    console.log(date)
    console.log(data2)
  }
  handleFearIndexHistoryError(error2){
    console.error(error2)
  }
}
