var weatherPrevisionPlantTypes = {}
var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
function getWeather() {
  var lastRowWeather = activeSpreadsheet.getSheetByName("Weather").getLastRow();
  var lastColumnWeather = activeSpreadsheet.getSheetByName("Weather").getLastColumn();
  for(j=2;j<=lastColumnWeather;j++)
  {
    plantType = activeSpreadsheet.getSheetByName("Weather").getRange(1,j).getValue();
    weatherBonus = normalizeNaN(activeSpreadsheet.getSheetByName("Weather").getRange(lastRowWeather,j).getValue());
    if(weatherBonus >= 0){
      greenHouse=false
    }else{
      greenHouse=true
    }
    weatherPrevisionPlantTypes[plantType] = {greenHouse, weatherBonus }
  }
  return weatherPrevisionPlantTypes;
}
function fillGreenHouse(){
  sendWarning = false;
  greenHouseTypes = ""
  weatherPrevisionPlantTypes = getWeather();
  console.log(weatherPrevisionPlantTypes);
  var lastRowWeather = activeSpreadsheet.getSheetByName("SeedsInfo").getLastRow();
  for(i=2;i<=lastRowWeather;i++){
    if(weatherPrevisionPlantTypes[plantType].greenHouse == true){
      var color = "#cc4125"
      var greenHouse = "yes"
      sendWarning = true;
      if(!verifyIfExists(greenHouseTypes,plantType)){
        greenHouseTypes += `${plantType}, `
      }
    }else{
      var color = "#ffffff"
      var greenHouse = "no"
    }
    plantType = activeSpreadsheet.getSheetByName("SeedsInfo").getRange(i,2).getValue();
    activeSpreadsheet.getSheetByName("SeedsInfo").getRange(i,5).setValue(greenHouse);
    activeSpreadsheet.getSheetByName("SeedsInfo").getRange(i,5).setBackground(color);
  }
  if(sendWarning){
      greenHouseTypes = greenHouseTypes.substring(0,greenHouseTypes.length-2);
      sendMessage("As plantas dos tipos: **"+greenHouseTypes+"** precisam de Green House @everyone");
    }
}
