$(document).ready(function(e) {

  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
      return false;
  };


  var fname = getUrlParameter('fname');
  //console.log(fname);

  if(fname != false) {

    $( ".fname p" ).last().html( fname );

    $("a").attr('href', function(i, h) {
     return h + (h.indexOf('?') != -1 ? "&fname="+fname+"" : "?fname="+fname+"");
    });

  }

});