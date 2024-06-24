public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        throw new AuraHandledException('TEST EXCEPTION');
       // return [SELECT FirstName, LastName, Email FROM Contact];
    }
}