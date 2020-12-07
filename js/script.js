var typed = new Typed('.TypedHome', {
  strings: ["Web Developer", 'Software Engineer'],
  typeSpeed: 50, fadeOutDelay: 50000000, loop: true
});

$('header div nav div a,header aside div nav a').click(function () {
  $('div section').addClass("d-none");
  $('.' + $(this).attr('id')).removeClass("d-none");
  if (getViewport() == 'sm' || getViewport() == 'xs') {
    $('nav div div').click(function () {
      $('#navbarSupportedContent').collapse("toggle");
    })
  };
});

function getViewport() {
  // https://stackoverflow.com/a/8876069
  let width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  )
  if (width <= 576) return 'xs'
  if (width <= 768) return 'sm'
  if (width <= 992) return 'md'
  if (width <= 1200) return 'lg'
  return 'xl'
}

$('#menubtn').click(function () {
  if ($('#asideMenu').attr('aria-hidden')=="true") {
    $('#asideMenu').addClass("lb-mobile-nav--opened");
    $('#asideMenu').attr('aria-hidden', false);
  }
  else{
    $('#asideMenu').removeClass("lb-mobile-nav--opened");
    $('#asideMenu').attr('aria-hidden', true);
  }
});
var currentYear = (new Date).getFullYear();
$('.age').text(currentYear-1998);