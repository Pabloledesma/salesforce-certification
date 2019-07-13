public with sharing class CampingListController {
    
    @AuraEnabled
    public static List<Camping_item__c> getItems() {
        return [select Id, Name, Quantity__c, Price__c from Camping_item__c];
    }

    @AuraEnabled
    public static Camping_item__c saveItem(Camping_item__c newItem){
        upsert newItem;
        return newItem;
    }
}
