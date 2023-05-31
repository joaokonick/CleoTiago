// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', ()=>{
    navList.classList.toggle("open")
});

// Viagens Section

const video = document.querySelector('.video');
const button = document.querySelector('.video-control');

button.addEventListener("click", playpausevideo);
function playpausevideo(){
    if(video.paused){
        button.innerHTML = "<i class='bx bx-pause'></i>";
        video.play();
    }else {
        button.innerHTML = "<i class='bx bx-play'></i>";
        video.pause();
    }
};

// Preloader
const loader = document.querySelector('.loader');
window.addEventListener("load", ()=>{
    setTimeout(() => {
     loader.style.display = "none";
    },1500)
});

// Fix Nav
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 200){
    navigation.classList.add("fix");
    header.style.zIndex = "1000";
  }else{
    navigation.classList.remove("fix");
  }
});

// Scroll
const links = [... document.querySelectorAll(".nav-link")];

links.map(link => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    const fix = navigation.classList.contains("fix");
    let position = el.offsetTop - navHeight;

    window.scrollTo({
        left: 0,
        top: position,
    });

    navList.classList.remove("open");
  });
});

const scroll = ScrollReveal({
    distance: "100px",
    duration: 2500,
    reset: true,
});

scroll.reveal(`.content h1, .content .btn`, {
    origin: "top",
    interval: 100,
});

scroll.reveal(`.about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form`,{
    origin: "right",
    
});

scroll.reveal(`.service img, .contact .title`, {
    origin: "top",
});

scroll.reveal(`.service .col, .trip .row`, {
    origin: "bottom",
});

scroll.reveal(`.trip .title, .more .col:first-child, .newsletter .col`, {
    origin: "left"
});

// show icons social
const social = document.querySelector('#social');

// Adiciona um evento de rolagem da página
window.addEventListener('scroll', function() {
  // Verifica se a posição atual da página atingiu 35% do comprimento da página
  const alturaDocumento = document.documentElement.scrollHeight;
  const alturaJanela = window.innerHeight;
  const posicaoAtual = window.scrollY;
  const posicaoLimite = (alturaDocumento - alturaJanela) * 0.35;

  if (posicaoAtual >= posicaoLimite) {
    // Se a posição atual da página atingiu o limite de 35%, adiciona a classe "oculto" para ocultar os ícones das redes sociais
    social.classList.add('oculto');
  } else {
    // Caso contrário, remove a classe "oculto" para exibir os ícones das redes sociais
    social.classList.remove('oculto');
  }
});



