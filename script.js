const toggleMenuButton = document.querySelector('.toggle-menu')
const menuMobile = document.getElementById('menu-mobile')

toggleMenuButton.addEventListener('click', function () {
  this.classList.toggle('active')
  menuMobile.classList.toggle('open')
  document.body.classList.toggle('overflow-hidden')
})

document.querySelectorAll('#menu-mobile a').forEach(function (link) {
  link.addEventListener('click', function () {
    toggleMenuButton.classList.remove('active')
    menuMobile.classList.remove('open')
    document.body.classList.remove('overflow-hidden')
  })
})

document.getElementById("localizarAbrigoBtn").addEventListener("click", function() {
    alert("Procurando Abrigos Próximos...");
});

function enviarFormulario(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.');
    event.target.reset();
}