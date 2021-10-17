function moutRanking() {
    var lastRowItem = 0;
    var sumSeed = 0;
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var rowLightEnergy = activeSpreadsheet.getSheetByName("LightEnergy").getLastRow();
    var rowBonus = activeSpreadsheet.getSheetByName("Bonus").getLastRow();
    var columnLightEnergy = activeSpreadsheet.getSheetByName("LightEnergy").getLastColumn();
    for(j=2;j<columnLightEnergy+1;j++){
      lastLightEnergy = normalizeNaN(activeSpreadsheet.getSheetByName("LightEnergy").getRange(rowLightEnergy,j).getValue());
      lastBonus = normalizeNaN(activeSpreadsheet.getSheetByName("Bonus").getRange(rowBonus,j).getValue());
      sumSeed = normalizeNaN(activeSpreadsheet.getSheetByName("SumSeeds").getRange(2,j-1).getValue());
      lastRowItem = lastLightEnergy + (sumSeed * 10000) + lastBonus;
      activeSpreadsheet.getSheetByName("Ranking").getRange(2,j-1).setValue(lastRowItem);
    }
  }