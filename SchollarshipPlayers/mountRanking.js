function moutRanking() {
    var lastRowItem = 0;
    var sumSeed = 0;
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var rowLightEnergy = activeSpreadsheet.getSheetByName("LightEnergy").getLastRow();
    var rowBonus = activeSpreadsheet.getSheetByName("Bonus").getLastRow();
    var columnLightEnergy = activeSpreadsheet.getSheetByName("LightEnergy").getLastColumn();
    for(i=2;i<columnLightEnergy+1;i++){
      lastLightEnergy = normalizeNaN(activeSpreadsheet.getSheetByName("LightEnergy").getRange(rowLightEnergy,i).getValue());
      lastBonus = normalizeNaN(activeSpreadsheet.getSheetByName("Bonus").getRange(rowBonus,i).getValue());
      sumSeed = normalizeNaN(activeSpreadsheet.getSheetByName("SumSeeds").getRange(2,i-1).getValue());
      lastRowItem = lastLightEnergy + (sumSeed * 10000) + lastBonus;
      activeSpreadsheet.getSheetByName("Ranking").getRange(2,i-1).setValue(lastRowItem);
    }
  }