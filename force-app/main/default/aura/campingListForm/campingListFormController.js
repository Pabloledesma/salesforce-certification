({
    clickCreateItem : function(component, event, helper) {
        
        var validItem = component.find('ItemForm').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
           
            var newItem = component.get("v.newItem"); 
            // Create the new item
            helper.createItem(component, newItem);
        }
    }
})
