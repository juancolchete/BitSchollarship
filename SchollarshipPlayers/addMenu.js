function createMenu() {
    SpreadsheetApp.getUi().createMenu("Crypto")
     .addItem("Mount Ranking", "getRanking")
     .addItem("Get weather estate", "getWeatherEstate")
     .addToUi();
 }
 
 function getRanking() {
   moutRanking();
 }
 function getWeatherEstate(){
  fillGreenHouse();
 }