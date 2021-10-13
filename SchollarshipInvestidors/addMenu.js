function createMenu() {
    SpreadsheetApp.getUi().createMenu("Crypto")
     .addItem("Get quotation", "getQuotation")
     .addItem("Get Wallet Balance", "walletBalance")
     .addToUi();
 }
 
 function getQuotation() {
   CryptoQuotation.getCriptoCurrenciesQuotation();
   
 }
 function walletBalance() {
   CryptoQuotation.getWalletBalance();
 }
 