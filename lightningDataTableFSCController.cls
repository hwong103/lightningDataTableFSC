public class lightningDataTableFSCController {
@AuraEnabled
public static List<sObject> getRecords(String obj, String fields, String condition, String order, String lim)
{
    String soql;
    soql = 'SELECT ';

    if (fields.contains('Id') || fields.contains('id'))
    {
        soql += fields;
    }
    else
    {
        soql += fields + ',Id';
    }
    soql += ' FROM ';
    soql += obj;

    if (condition != null && condition != '')
    {
        soql += ' WHERE ' + condition;
    }
    if (order != null && order != '')
    {
        soql += ' ORDER BY ' + order;
    }
    if (lim != null && lim != '')
    {
        soql += ' LIMIT ' + lim;
    }

    return Database.query(soql);
}
@AuraEnabled
public static boolean updateRecords(List<sObject> editedRecordList)
{
    system.debug(LoggingLevel.INFO, 'editedRecordList ==== ' + string.valueof(editedRecordList));
    try {
        Database.update(editedRecordList);
        return true;
    } catch (Exception e) {
        return false;
    }
}
}