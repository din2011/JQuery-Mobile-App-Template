var panel = '<div data-role="panel" id="mypanel" data-position="left"  data-theme="a"> '+
'<ul data-role="listview" data-inset="true"> '+
'<li><a  href="#p1">Page 1</a></li> '+
'<li><a  href="#p2">Page 2</a></li> '+
'<li><a  href="#p3">Page 3</a></li> '+
'</ul></div>';



$(document).one('pagebeforecreate', function () {
    $.mobile.pageContainer.prepend(panel);
    $("#mypanel").panel().enhanceWithin();

	$.mobile.defaultPageTransition = 'none';
	//avoid flickering page transition...
});





$(document).on("pageinit", function () {
    
   //http://stackoverflow.com/questions/23193384/jquery-mobile-panel-not-getting-closed 
  $("[data-role=panel] a").on("click", function () {
    if($(this).attr("href") == "#"+$.mobile.activePage[0].id) {
      $("[data-role=panel]").panel("close");
    }
  });
  
  
  
  
  
});

