//Sticky nav menu /bar
$(document).ready(function(){

  let nav_offset_top=$('.header_rc').height(); 
  function navbarfixed()
  {
      if($('.header_rc').length){
          $(window).scroll(function(){
            let scroll =$(window).scrollTop();
            if(scroll>=nav_offset_top){
                $(".header_rc .main_menu").addClass("navbar_fixed");
               
            }else{
                $(".header_rc .main_menu").removeClass("navbar_fixed");
            }
          }) ;
      }
  }

  navbarfixed();
});

