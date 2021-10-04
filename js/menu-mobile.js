const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', function(){
  var nav = document.getElementById('nav')
  nav.classList.toggle('active')
})