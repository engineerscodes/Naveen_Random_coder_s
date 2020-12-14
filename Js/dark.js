const checkbox=document.getElementById('checkbox');
const back=document.getElementById('backme');
const navbars=document.getElementById('navblack');
const navact=document.getElementById('activebar');
const navact1=document.getElementById('activebar1');
const navact2=document.getElementById('activebar2');
const navact3=document.getElementById('activebar3');
const navact4=document.getElementById('activebar4');
const home=document.getElementById('homes');
const home1=document.getElementById('homes1');
const home2=document.getElementById('homes2');
const home3=document.getElementById('homes3');
const home4=document.getElementById('homes4');
const footd=document.getElementById('food');
const foots=document.getElementById('footdark');
const pro=document.getElementById("pr");
const speak=document.getElementById('talk');
const scam=document.getElementById('scam');
const logo=document.getElementById('logoss');
checkbox.addEventListener('change',()=>{
   
   document.body.classList.toggle('dark');
   if(navbars.classList.contains('navblacktheme') || back.classList.contains('noback') )
  {  logo.classList.remove('log');
   navbars.classList.remove('navblacktheme');
   scam.classList.remove('look');
    back.classList.remove('noback') ;
    navact.classList.remove('navtext');
    navact1.classList.remove('navtext');
    navact2.classList.remove('navtext');
    navact3.classList.remove('navtext');
    navact4.classList.remove('navtext');
    home.classList.remove('act');
    home1.classList.remove('act');
    home2.classList.remove('act');
    home3.classList.remove('act');
    home4.classList.remove('act');

     foots.classList.remove('footblue');
     speak.classList.remove('whyabout');
     pro.classList.remove('prg');
     footd.classList.remove('bot');
  }
  else{  logo.classList.add('log');
   navbars.classList.add('navblacktheme');
   navact.classList.add('navtext');
   back.classList.add('noback');
   home.classList.add('act');

   navact1.classList.add('navtext');
    navact2.classList.add('navtext');
    navact3.classList.add('navtext');
    navact4.classList.add('navtext');

    home1.classList.add('act');
    home2.classList.add('act');
    home3.classList.add('act');
    home4.classList.add('act');
    foots.classList.add('footblue');
    speak.classList.add('whyabout');
    pro.classList.add('prg');
    scam.classList.add('look');
    footd.classList.add("bot");
  }
  
});

