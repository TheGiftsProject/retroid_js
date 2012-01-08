steal('steal/coffee','steal/less','./lib/underscore-min.js').then(
	'./retroid.less', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./controllers/controllers.coffee',
	function(){					// configure your application
		$('body').retroid_app();	
	})