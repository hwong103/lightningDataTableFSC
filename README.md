# lightningDataTableFSC
Lightning datatable for Flow Screens

Resources/Inspiration:
http://sfdcfacts.com/lightning/editable-lightningdatatable-summer18-feature/
https://github.com/alexed1/LightningFlowComponents/tree/master/flow_screen_components/datatableFSC
https://terencechiu.com/2018/06/13/creating-lightning-components-for-flow-screens/

  Input
  
    Define Table Settings and data
    
    1. Object (eg. Account)
    2. Where Clause (eg. Name LIKE '%{!varName}%')
    3. Limit (eg. 5)
    4. Order By (eg. Name ASC)
    5. Max Row Selection - by default = 0 (eg. 1)
    6. Hide Checkbox Column - by default = false (eg. true)
    7. Show Row Number  - by default = true (eg. true)
    8. Table Title (eg. List of Accounts Like {!varName})

    Define Columns and fieldNames to query
    
    1. colLabel# (eg. Name)
    2. colAPI# (eg. Name)
    3. colType# - by default = text(eg. currency)
    4. coLEditable# - by default = false (eg. true)
    
   Output
   
    1. Output: reload (boolean variable; use to refresh the Flow Screen & data table after inline edit is saved)
    2. Output: selectedRowIds (collection of Ids that have been selected that can be used later in the Flow).
    
  
  
  
  
    
