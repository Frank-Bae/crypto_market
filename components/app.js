
class App {
  constructor(cryptoTable){
    this.cryptoTable = cryptoTable;
    this.handleGetCryptoSuccess = this.handleGetCryptoSuccess.bind(this);
    this.handleGetCryptoError = this.handleGetCryptoError.bind(this);
  }
  getCrypto(){
    $.ajax({
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=32bcf25de42cdc2dfce6176731239556beb85906a5566e11ed8eb43e9b827aca ",
      // header: { "authirization": "32bcf25de42cdc2dfce6176731239556beb85906a5566e11ed8eb43e9b827aca"},
      success: this.handleGetCryptoSuccess,
      error: this.handleGetCryptoError
    })
  }
  handleGetCryptoSuccess(data){
    console.log(data)
    this.cryptoTable.updateTable(data)
  }
  handleGetCryptoError(error){
    console.error(error)
  }
}
