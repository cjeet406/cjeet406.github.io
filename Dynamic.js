WebFont.load({
    google: {
      families: ["Droid Serif:400,400italic,700,700italic"]
    }
  });

  ! function(o, c) {
    var n = c.documentElement,
      t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
  }(window, document);

window.onload = function(){
  ChangeTxtOfHeading("Hello! Hardik This Side! I am a UX/UI Designer.");
}


  function ChangeTxtOfHeading(textYouWantToReplace = null){
    if(textYouWantToReplace == null){
      $('#headingtxt').attr('style','display:none');
    }
    else {
      $('#headingtxt').html('');
      $('#headingtxt').html(textYouWantToReplace);
    }
  }
