$(function (){//로드 후 한번만



  $('.cont-item.white').hover(function(){
    $('.sc-content .col-left .mid .figure-item').addClass('scale')
  },function(){
    $('.sc-content .col-left .mid .figure-item').removeClass('scale')
  })


gsap.to('.header .logo',{
  scrollTrigger:{
      trigger:".header",
      start:"40% 15%",
      end:"80% 15%",
      // markers:true,
      scrub:1,
  },
  scale:0.8,
  opacity:0,
})

gsap.to(".intro-area .intro-circle", {
  scrollTrigger:{
    trigger:".sc-slide",
    start:"0% 50%",
    end:"100% 100%",
    scrub: 0.2,
    // markers:true,
  },
  rotation:360
});


gsap.set('.slide-list .left',{xPercent:50})
gsap.set('.slide-list .right',{xPercent:-50})

  $('.slide-list .slide-item').each(function(index,el){

    edu = gsap.timeline({
      scrollTrigger: {
            trigger: el,
            start: "0% 100%",
            end: "100% 50%",
            scrub: 0.2,
            // markers: true,
          }
    })
    edu
    .addLabel('a')
    .to( $(this).find('.left'), {xPercent:0},'a')
    .to( $(this).find('.right'), {xPercent:0},'a')

  })


gsap.to(".sc-contact .contact-circle", {
  scrollTrigger:{
    trigger:".sc-contact",
    start:"0% 60%",
    end:"80% 70%",
    scrub: 0.2,
    // markers:true,
  },
  rotation:360
});


// 맨위로
$('.btn-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 800);
  return false;
});


})//끝부분
