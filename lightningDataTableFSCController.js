({
    init: function (component, event, helper) {

        var dataArr = [];
        var optionList = [];

        var colArr = [];
        var fieldNameArr = [];
        var tableTitle = component.get('v.tableTitle');
        var colLabel01 = component.get('v.colLabel01');
        var colLabel02 = component.get('v.colLabel02');
        var colLabel03 = component.get('v.colLabel03');
        var colLabel04 = component.get('v.colLabel04');
        var colLabel05 = component.get('v.colLabel05');
        var colLabel06 = component.get('v.colLabel06');
        var colLabel07 = component.get('v.colLabel07');
        var colLabel08 = component.get('v.colLabel08');
        var colLabel09 = component.get('v.colLabel09');
        var colLabel10 = component.get('v.colLabel10');

        var colAPI01 = component.get('v.colAPI01');
        var colAPI02 = component.get('v.colAPI02');
        var colAPI03 = component.get('v.colAPI03');
        var colAPI04 = component.get('v.colAPI04');
        var colAPI05 = component.get('v.colAPI05');
        var colAPI06 = component.get('v.colAPI06');
        var colAPI07 = component.get('v.colAPI07');
        var colAPI08 = component.get('v.colAPI08');
        var colAPI09 = component.get('v.colAPI09');
        var colAPI10 = component.get('v.colAPI10');

        var colType01 = component.get('v.colType01');
        var colType02 = component.get('v.colType02');
        var colType03 = component.get('v.colType03');
        var colType04 = component.get('v.colType04');
        var colType05 = component.get('v.colType05');
        var colType06 = component.get('v.colType06');
        var colType07 = component.get('v.colType07');
        var colType08 = component.get('v.colType08');
        var colType09 = component.get('v.colType09');
        var colType10 = component.get('v.colType10');

        var colEditable01 = component.get('v.colEditable01');
        var colEditable02 = component.get('v.colEditable02');
        var colEditable03 = component.get('v.colEditable03');
        var colEditable04 = component.get('v.colEditable04');
        var colEditable05 = component.get('v.colEditable05');
        var colEditable06 = component.get('v.colEditable06');
        var colEditable07 = component.get('v.colEditable07');
        var colEditable08 = component.get('v.colEditable08');
        var colEditable09 = component.get('v.colEditable09');
        var colEditable10 = component.get('v.colEditable10');

        if (tableTitle != null && tableTitle != '') {
            component.set('v.showTitle', true);
        }

        if (colLabel01 != null && colLabel01 != '') {
            var temp;
            if (colType01 == 'currency') {
                temp = { 'label': colLabel01, 'fieldName': colAPI01, 'type': colType01, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable01 };
            } else {
                temp = { 'label': colLabel01, 'fieldName': colAPI01, 'type': colType01, 'editable': colEditable01 };
            }
            console.log('temp >>> ' + JSON.stringify(temp));
            colArr.push(temp);
            fieldNameArr.push(colAPI01);
        }

        if (colLabel02 != null && colLabel02 != '') {
            var temp;
            if (colType01 == 'currency') {
                temp = { 'label': colLabel02, 'fieldName': colAPI02, 'type': colType02, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable02 };
            } else {
                temp = { 'label': colLabel02, 'fieldName': colAPI02, 'type': colType02, 'editable': colEditable02 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI02);
        }

        if (colLabel03 != null && colLabel03 != '') {
            var temp;
            if (colType03 == 'currency') {
                temp = { 'label': colLabel03, 'fieldName': colAPI03, 'type': colType03, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable03 };
            } else {
                temp = { 'label': colLabel03, 'fieldName': colAPI03, 'type': colType03, 'editable': colEditable03 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI03);
        }

        if (colLabel04 != null && colLabel04 != '') {
            var temp;
            if (colType04 == 'currency') {
                temp = { 'label': colLabel04, 'fieldName': colAPI04, 'type': colType04, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable04 };
            } else {
                temp = { 'label': colLabel04, 'fieldName': colAPI04, 'type': colType04, 'editable': colEditable04 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI04);
        }

        if (colLabel05 != null && colLabel05 != '') {
            var temp;
            if (colType05 == 'currency') {
                temp = { 'label': colLabel05, 'fieldName': colAPI05, 'type': colType05, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable05 };
            } else {
                temp = { 'label': colLabel05, 'fieldName': colAPI05, 'type': colType05, 'editable': colEditable05 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI05);
        }
        if (colLabel06 != null && colLabel06 != '') {
            var temp;
            if (colType06 == 'currency') {
                temp = { 'label': colLabel06, 'fieldName': colAPI06, 'type': colType06, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable06 };
            } else {
                temp = { 'label': colLabel06, 'fieldName': colAPI06, 'type': colType06, 'editable': colEditable06 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI06);
        }
        if (colLabel07 != null && colLabel07 != '') {
            var temp;
            if (colType07 == 'currency') {
                temp = { 'label': colLabel07, 'fieldName': colAPI07, 'type': colType07, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable07 };
            } else {
                temp = { 'label': colLabel07, 'fieldName': colAPI07, 'type': colType07, 'editable': colEditable07 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI07);
        }
        if (colLabel08 != null && colLabel08 != '') {
            var temp;
            if (colType08 == 'currency') {
                temp = { 'label': colLabel08, 'fieldName': colAPI08, 'type': colType08, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable08 };
            } else {
                temp = { 'label': colLabel08, 'fieldName': colAPI08, 'type': colType08, 'editable': colEditable08 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI08);
        }
        if (colLabel09 != null && colLabel09 != '') {
            var temp;
            if (colType09 == 'currency') {
                temp = { 'label': colLabel09, 'fieldName': colAPI09, 'type': colType09, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable09 };
            } else {
                temp = { 'label': colLabel09, 'fieldName': colAPI09, 'type': colType09, 'editable': colEditable09 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI09);
        }
        if (colLabel10 != null && colLabel10 != '') {
            var temp;
            if (colType10 == 'currency') {
                temp = { 'label': colLabel10, 'fieldName': colAPI10, 'type': colType10, 'typeAttributes': { 'currencyCode': 'AUD' }, 'editable': colEditable10 };
            } else {
                temp = { 'label': colLabel10, 'fieldName': colAPI10, 'type': colType10, 'editable': colEditable10 };
            }
            colArr.push(temp);
            fieldNameArr.push(colAPI10);
        }

        component.set('v.columns', colArr);

        var action = component.get("c.getRecords");
        action.setParams({
            obj: component.get('v.object'),
            fields: fieldNameArr.toString(),
            condition: component.get('v.condition'),
            lim: component.get('v.limit'),
            order: component.get('v.order')
        });
        action.setCallback(this, function (response) {
            var dataObjArr = response.getReturnValue();
            component.set('v.dataObjArr', dataObjArr);
            console.log('dataObjArr >>>' + JSON.stringify(dataObjArr));
        });
        $A.enqueueAction(action);
    },

    getSelectedRow: function (component, event) {
        //save the selected rows into a flow-accessible attribute

        var selectedRows = event.getParam('selectedRows');
        var key = component.get('v.key');
        var selectedRowIds = [];

        for (var i = 0; i < selectedRows.length; i++) {
            selectedRowIds.push(selectedRows[i].Id);
            console.log('Selected Row >>>' + JSON.stringify(selectedRows[i]));
        }
        component.set('v.selectedRowIds', selectedRowIds);
    },
    onSave: function (component, event, helper) {
        helper.saveDataTable(component, event, helper);
    }
})