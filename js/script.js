 var $overlay = $('<div id="overlay"></div>');
 var $image =$('<img>');
 var $caption = $('<p></p>');

$('body').append($overlay);

 //Adding image to the overlay
 $overlay.append($image);

 //Adding caption to overlay
 $overlay.append($caption);
//Create lightbox

       $("#imageGallery a").click(function(event){
           //Preventing default behaviour of browser
           event.preventDefault();
          var imageLocation = $(this).attr('href');
           //show overlay when image clicked
           $overlay.show();

           $image.attr('src',imageLocation);
           //Adding alt attribute value to caption
           var $alt = $(this).children('img').attr('alt');
           $caption.text($alt);

       });
    //hiding the overlay on clicking
 $overlay.click(function(){

     $(this).hide();
 });