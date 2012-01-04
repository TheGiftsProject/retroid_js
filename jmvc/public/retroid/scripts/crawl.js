// load('retroid/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("retroid/retroid.html","retroid/out")
});
