$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn(); 
        }
    
        else {
           $(".navbar").removeClass("sticky");
           $(".goTop").fadeOut(); 
        }
    });

    $(".goTop").click(function(){scroll(0,0)})

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $('.works').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },

        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },

        callbacks: {
            elementParse: function(item) {
                if(item.el[0].className == 'work video') {
                    item.type = 'iframe';
                } else {
                    item.type = 'image';
                }
            }
        },
    });
    
const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
      btn.src = "images/sun.png";

  }else{
      btn.src = "images/moon.png";
  }

});
});
