({
	saveDataTable: function (component, event, helper) {

		var editedRecords = component.find("recordDataTable").get("v.draftValues");
		var totalRecordEdited = editedRecords.length;		
		var action = component.get("c.updateRecords");
		action.setParams({
			'editedRecordList': editedRecords
		});		

		action.setCallback(this, function (response) {
			var returnValue = response.getReturnValue();
			var state = response.getState();
			console.log('state >>> ' + state);
			console.log('response >>> ' + response);
			if (state === "SUCCESS") {
				//if update is successful
				if (response.getReturnValue() === true) {
					helper.showToast({
						"title": "Record Update",
						"type": "success",
						"message": totalRecordEdited + " Records Updated"
					});
					helper.reloadDataTable(component);
				} else { //if update got failed
					helper.showToast({
						"title": "Error!!",
						"type": "error",
						"message": "Error in update"
					});
				}
			} else {
				var errors = response.getError();
				if (errors) {
					if (errors[0] && errors[0].message) {
						alert("Error message: " + errors[0].message);
					}
				}
				else {
					alert("Unknown error");
				}
			}
		});
		$A.enqueueAction(action);
		component.find("recordDataTable").set("v.draftValues", null);
	},
    /*
     * Show toast with provided params
     * */
	showToast: function (params) {
		var toastEvent = $A.get("e.force:showToast");
		if (toastEvent) {
			toastEvent.setParams(params);
			toastEvent.fire();
		} else {
			alert(params.message);
		}
	},
    /*
     * reload data table
     * */
	reloadDataTable: function (component) {
		// var refreshEvent = $A.get("e.force:refreshView");		
		// if (refreshEvent) {
		// 	refreshEvent.fire();
		// }			

		component.set("v.reload", true);		
		var navigate = component.get("v.navigateFlow");

		navigate("NEXT");
	}
})