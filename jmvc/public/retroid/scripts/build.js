//steal/js retroid/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('retroid/scripts/build.html',{to: 'retroid'});
});
