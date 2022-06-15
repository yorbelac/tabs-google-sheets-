function sampleFunctions() { ///////////////////////////////////////////////////////////////////////////// SAMPLE FUNCTIONS TO GET YOUR STARTED ///////////////////////////////////
//  Browser.msgBox("String");
//  Browser.inputBox("TITLE","Message content.",Browser.Buttons.YES_NO_CANCEL);
//  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Values");
//  var range = sheet.getRange("B1:B32");
//  var rangenumeric = sheet.getRange(row,column,rows,columns);
//  var lastRow = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Shopify").getLastRow();
} //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function test() {
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
    
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabItemName = spreadsheet.getRange("Q4").getValue();
    var tabItemPrice = spreadsheet.getRange("R4").getValue()*(1+taxRate);
    var row = "log!A2:D2"
    var order = [[tabDate, tabName, tabItemName, tabItemPrice]];

    //paste data
    spreadsheet.getRange(row).setValues(order)
}

function Pay() { 
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    
    //relevant variables
    var tabTax = spreadsheet.getRangeByName('tabTax').getValue();
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabSpend = spreadsheet.getRangeByName('tabSpend').getValue();
    var tabTotal = spreadsheet.getRangeByName('tabTotal').getValue();    
    
    //functions
    //require tab name
    if (tabName == "*") {
        ui.alert("Select a tab for this action.");
        return;
    }
    
    //Payment Prompt
    var response = ui.prompt(tabSpend.toFixed(2) + " + " + tabTax.toFixed(2) + " tax = " + "Total: " + tabTotal.toFixed(2), 'Enter amount and select YES if CASH and NO for CREDIT', ui.ButtonSet.YES_NO);
    var tabPayment = response.getResponseText();
    
    //Log Payment
    //Cash or Credit
    if (response.getSelectedButton() == ui.Button.YES) {
        var tabItemName = "CASH";
    } else { //can this just be 'else'? or is this handling closing the dialog box
        var tabItemName = "CREDIT";
    }
    
    //Make Change?
    var tabChange = (tabTotal-tabPayment);
    
    if (tabChange < 0) {
        //change available
        var change = ui.alert('Give change?', tabChange.toFixed(2), ui.ButtonSet.YES_NO);
        if (change == ui.Button.YES) {
            //make change
            spreadsheet.getSheetByName("log").insertRowsBefore(2, 2);
            var row = "log!A2:D3";
            var order = [[tabDate, tabName, "Change", tabChange*-1],[tabDate, tabName, tabItemName, tabPayment*-1]];         
            spreadsheet.getRange(row).setValues(order);
            return;
        }
    }
        //change unavailable
        spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
        var row = "log!A2:D2"
        var order = [[tabDate, tabName, tabItemName, tabPayment*-1]]
        spreadsheet.getRange(row).setValues(order);
}

function Clear(){
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();

    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabItemName = spreadsheet.getRangeByName('tabItemName').getValue();
    var tabItemPrice = spreadsheet.getRangeByName('tabItemPrice').getValue();
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    //negative because deleting item
    var itemTotal = (tabItemPrice * (1 + taxRate))*-1;

    //require tab name
    if (tabName == "*") {
    ui.alert("Select a tab for this action.");
    return;
    }

    //require tab item
    if (tabItemPrice < .01) {
    ui.alert('Nothing selected', 'Please fully select a menu item.', ui.ButtonSet.OK);
    return;
    }

    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    var row = "log!A2:D2"
    var order = [[tabDate, tabName, tabItemName, itemTotal]];

    //paste data
    spreadsheet.getRange(row).setValues(order)

    spreadsheet.getRangeByName('orderSelection').clearContent();
}


function Sell(){
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();

    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabName = spreadsheet.getRangeByName('tabName').getValue();
    var tabItemName = spreadsheet.getRangeByName('tabItemName').getValue();
    var tabItemPrice = spreadsheet.getRangeByName('tabItemPrice').getValue();
    var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
    //negative because deleting item
    var itemTotal = tabItemPrice * (1 + taxRate);

    //require tab name
    if (tabName == "*") {
    ui.alert("Select a tab for this action.");
    return;
    }

    //require tab item
    if (tabItemPrice < .01) {
    ui.alert('Nothing selected', 'Please fully select a menu item.', ui.ButtonSet.OK);
    return;
    }

    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
    var row = "log!A2:D2"
    var order = [[tabDate, tabName, tabItemName, itemTotal]];

    //paste data
    spreadsheet.getRange(row).setValues(order)

    spreadsheet.getRangeByName('orderSelection').clearContent();
}

function misc() {
  //essential variables
  var spreadsheet = SpreadsheetApp.getActive();
  var ui = SpreadsheetApp.getUi();
  
  //require tab name
  if (spreadsheet.getRangeByName('tabName').getValue() == "*") {
    ui.alert("Select a tab for this action.");
    return;
  }

  var miscCost = ui.prompt('Miscellaneous item.', 'Enter cost.', ui.ButtonSet.OK);

  //create new row  
  spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
  
  //relevant variables
  var row = "log!A2:D2"
  var taxRate = spreadsheet.getRangeByName("taxRate").getValue();
  var tabName = spreadsheet.getRangeByName('tabName').getValue();
  var tabDate = spreadsheet.getRangeByName('today').getValue();
  var tabItemName = "Misc";
  var tabItemPrice = miscCost.getResponseText()*(1+taxRate);

  var order = [[tabDate, tabName, tabItemName, tabItemPrice]];

  //paste data
    spreadsheet.getRange(row).setValues(order)
}

function tip() {
  //essential variables
  var spreadsheet = SpreadsheetApp.getActive();
  var ui = SpreadsheetApp.getUi();
  
  var tipTotal = ui.prompt('Tip', 'Enter Tip Amount', ui.ButtonSet.OK);

  //create new row  
  spreadsheet.getSheetByName("log").insertRowsBefore(2, 1);
  
  //relevant variables
  var row = "log!A2:D2"
  var tabName = "TIP";
  var tabDate = spreadsheet.getRangeByName('today').getValue();
  var tabItemName = "Misc";
  var tabItemPrice = tipTotal.getResponseText();

  var order = [[tabDate, tabName, tabItemName, tabItemPrice]];

  //paste data
    spreadsheet.getRange(row).setValues(order);
    ui.alert("Tip Recorded","Thank you!", ui.ButtonSet.OK);
}

function delivery() {
    //essential variables
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();

    //delivery prompt
    var deliveryTotal = ui.prompt('Delivery Total', 'Enter delivery amount', ui.ButtonSet.OK);

    //functions
    //create new row  
    spreadsheet.getSheetByName("log").insertRowsBefore(2, 2);

    //relevant variables
    var row = "log!A2:D3"
    var tabDate = spreadsheet.getRangeByName('today').getValue();
    var tabName = "Delivery";
     var tabItemPrice = deliveryTotal.getResponseText();

    var order = [[tabDate, tabName, "CREDIT", tabItemPrice*-1],[tabDate, tabName, "Misc", tabItemPrice]];
    spreadsheet.getRange(row).setValues(order);
    
    ui.alert("Takeout Recorded","Thank you!", ui.ButtonSet.OK);
}
