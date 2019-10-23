({
	openSingleFile: function(cmp, event, helper) {
        console.log('in openSingleFile()');
		var navLink = cmp.find("navLink");
		var pageRef = {
			type: 'standard__namedPage',
			attributes: {
				pageName: 'filePreview',
			},
			state : {
				recordIds: '0692v000005kU6yAAE',
				selectedRecordId: '0692v000005kU6yAAE'
			}
		};
		navLink.navigate(pageRef, true);
	},
	openMultipleFile: function(cmp, event, helper) {
		var navLink = cmp.find("navLink");
		var pageRef = {
			type: 'standard__namedPage',
			attributes: {
				pageName: 'filePreview',
			},
			state : {
				recordIds: '069xxxxxxxxxxx,0691yyyyyyyyyyyyy',
				selectedRecordId: '069xxxxxxxxxxx'
			}
		};
		navLink.navigate(pageRef, true);
	}
});