//collapse page navs after use
$(function(){
	$('body').delegate('.content-secondary .ui-collapsible-content', 'vclick',  function(){
		$(this).trigger("collapse")
	});
	
	$(document).on( "click", ".show-page-loading-msg", function() {
		  var $this = $( this ),
		  theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
		  msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
		  textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
		  textonly = !!$this.jqmData( "textonly" );
		  html = $this.jqmData( "html" ) || "";
		$.mobile.loading( 'show', {
		  text: msgText,
		  textVisible: textVisible,
		  theme: theme,
		  textonly: textonly,
		  html: html
		  });
		})
		.on( "click", ".hide-page-loading-msg", function() {
		  $.mobile.loading( "hide" );
	});  
	
});

function setDefaultTransition(){
	var winwidth = $( window ).width(),
		trans ="slide";
		
	if( winwidth >= 1000 ){
		trans = "none";
	}
	else if( winwidth >= 650 ){
		trans = "fade";
	}

	$.mobile.defaultPageTransition = trans;
}

//set default documentation 
$( document ).bind( "pageinit", setDefaultTransition );
$(function(){
	$( window ).bind( "throttledresize", setDefaultTransition );
});

$(document).on( "pageinit", function() {
	  $.mobile.selectmenu.prototype.options.nativeMenu = false;
	  
	  $.mobile.loader.prototype.options.text = "loading";
	  $.mobile.loader.prototype.options.textVisible = false;
	  $.mobile.loader.prototype.options.theme = "a";
	  $.mobile.loader.prototype.options.html = "";
});
