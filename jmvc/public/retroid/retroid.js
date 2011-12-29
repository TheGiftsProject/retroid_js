steal('steal/coffee','steal/less').then(
	'./retroid.less', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./controllers/controllers.coffee',
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	function(){					// configure your application
		$('body').retroid_app();	
	})