function createMenu() {
    SpreadsheetApp.getUi().createMenu("Crypto")
     .addItem("Mount Ranking", "getRanking")
     .addToUi();
 }
 
 function getRanking() {
   moutRanking();
 }
 