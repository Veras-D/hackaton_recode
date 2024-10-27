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

// mapa
// Inicializa o mapa
const map = L.map('map').setView([-29.366474, -51.434906], 6);

// Adiciona uma camada de tile (mapa)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Adiciona marcadores para os abrigos
const shelters = [
  { name: "Paróquia General Neto", coords: [-29.366474, -51.434906] },
  { name: "Abrigo Temporário Sesi", coords: [-29.167312, -51.174982] },
  { name: "Abrigo Aparecida", coords: [-28.850908, -51.278921] },
  { name: "Ctg Querência Xucra", coords: [-28.850908, -51.278921] },
  { name: "Abrigo Jesus's House", coords: [-29.3236, -49.7583] },
  { name: "Ginásio De Esportes Montanha", coords: [-29.450734, -51.987115] },
  { name: "Sede Juventude", coords: [-31.7717781, -52.2342088] },
];

shelters.forEach(shelter => {
  L.marker(shelter.coords).addTo(map)
    .bindPopup(shelter.name)
    .openPopup()
    .closePopup();
});