//js retroid/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('retroid/retroid.html', {
		markdown : ['retroid']
	});
});