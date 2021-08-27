({
    doInit : function(component, event, helper){
        var getCampingItemListingAction = component.get('c.getItems');
        getCampingItemListingAction.setCallback(this, function(response){
            var respState = response.getState();
            if(respState == 'SUCCESS'){
                var vItems = component.get('v.items');
                vItems = response.getReturnValue();
                component.set('v.items', vItems);
            }
        });
        $A.enqueueAction(getCampingItemListingAction);
    },
    handleAddItem : function(component, event, helper){
      
        console.log('we are in controller????')
        var newCampingItem = event.getParam('item');
        console.log(newCampingItem);
        var saveItemAction = component.get('c.saveItem');
        console.log('we are in controller****this is after save')
        saveItemAction.setParams({ 'item' :  newCampingItem });
        saveItemAction.setCallback(this, function(response){
            var respState = response.getState();
            console.log(respState);
            if( respState == 'SUCCESS'){
                var theItems = component.get("v.items");
                theItems.push(response.getReturnValue());
                
                component.set("v.items", theItems);
            }
        });
        
        $A.enqueueAction(saveItemAction);
    }
})