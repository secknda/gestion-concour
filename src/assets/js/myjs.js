$(function () {
  var tabEl = $('.tabSelected');
  var tabElContent = $('.tabSelectedContent');
  tabEl.click(function () {

    tabEl.removeClass('active');
    $(this).addClass("active");

    var id = $(this).attr('id');

    tabElContent.removeClass('show active');

    $("." + id).addClass('show active');
  });

  const titreSpans = document.querySelectorAll('h1 span'); // selecteur sur le titre h1
  const btns = document.querySelectorAll('.btn-first'); // sur les boutons
  //const logo = document.querySelector('.logo'); //le logo
  // const medias = document.querySelectorAll('.bulle'); //les medias des reseraux sociaux
  const l1 = document.querySelector('.accordion-item '); // ligne
  const l2 = document.querySelector('.p ');//ligne

  window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });

    TL
      .staggerFrom(titreSpans, 1, { right: -250, opacity: 0, ease: "power2.out" }, 0.3)
      .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, '-=1')
      .from(l1, 1, { width: 0, ease: "power2.out" }, '-=1')
      .from(l2, 1, { width: 0, ease: "power2.out" }, '-=2')
      //.from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
      // .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1')
      ;
    TL.play();
  })
})
