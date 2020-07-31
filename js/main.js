window.onscroll = function() {myFunction()};

var header = document.getElementById("main-nav");
var mheader = document.getElementById('mobile-nav');

var sticky = header.offsetTop;
// var msticky = mheader.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    document.querySelector('.nav-full').classList.add("sticky");
    // mheader.classList.add("sticky");
  } else {
    // document.querySelector('.nav-full').classList.remove("sticky");
  }
}
let hamburger =  document.querySelector('.hamburger');

  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');
  let link =document.querySelector('.clink');
  let link1 =document.querySelector('.clink2');
  let link2=document.querySelector('.clink3');
  let link3=document.querySelector('.clink4');
  let link4=document.querySelector('.clink5');

  hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
  });

  times.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
  link.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
  link1.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
  link2.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
  link3.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
  link4.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
  

