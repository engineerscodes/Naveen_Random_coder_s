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


/*Mouse Animation  */

let mouseCursor=document.querySelector(".cursor");
let navLinks=document.querySelectorAll(".navbar-nav li ");

window.addEventListener('mousemove',cursor);

function cursor( e){
    mouseCursor.style.top=e.pageY+"px";
    mouseCursor.style.left=e.pageX+'px';
}

navLinks.forEach(link =>{
   link.addEventListener('mouseover',()=>{
     mouseCursor.classList.add("link-grow");
   });
   link.addEventListener('mouseleave',()=>{
    mouseCursor.classList.remove("link-grow");

  });
});
