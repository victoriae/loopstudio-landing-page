window.onload = function () {
  document.getElementById("open-nav").addEventListener("click", function () {
    openNav()
  })
  document.getElementById("close-nav").addEventListener("click", function () {
    closeNav()
  })
};

var openNav = () => {
  $('.menu-content').css('height', '100%')
  $('body').css('overflow', 'hidden')
  $('#open-nav').css('display', 'none')
  $('#close-nav').css('display', 'block')
}

var closeNav = () => {
  $('.menu-content').css('height', '0')
  $('body').css('overflow', 'auto')
  $('#close-nav').css('display', 'none')
  $('#open-nav').css('display', 'block')
}