//quick buttons

function itemViaArray(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q4").getValue();
    var tabItemPrice = spreadsheet.getRange("R4").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item1(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q4").getValue();
    var tabItemPrice = spreadsheet.getRange("R4").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item2(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q5").getValue();
    var tabItemPrice = spreadsheet.getRange("R5").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item3(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q6").getValue();
    var tabItemPrice = spreadsheet.getRange("R6").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item4(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q7").getValue();
    var tabItemPrice = spreadsheet.getRange("R7").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item5(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q8").getValue();
    var tabItemPrice = spreadsheet.getRange("R8").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item6(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q9").getValue();
    var tabItemPrice = spreadsheet.getRange("R9").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item7(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q10").getValue();
    var tabItemPrice = spreadsheet.getRange("R10").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item8(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q11").getValue();
    var tabItemPrice = spreadsheet.getRange("R11").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item9(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q12").getValue();
    var tabItemPrice = spreadsheet.getRange("R12").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }
  
  function item10(){
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //require tab name
    if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
      ui.alert("Select a tab for this action.");
      return;
    }
  
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    
    //relevant variables
    var row = "log!A2:D2"
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q13").getValue();
    var tabItemPrice = spreadsheet.getRange("R13").getValue()*(1+taxRate);
  
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];
  
    //paste data
      spreadsheet.getRange(row).setValues(order)
  }