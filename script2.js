// === CONTADORES DE DIAS ===

const dataInicio = new Date(2023,5,17,23,0,0);
const dataInicio1 = new Date(2023,11,30,19,0,0);
const dataInicio2 = new Date(2024,0,22,21,0,0);

function atualizarContador(data,id){
  const agora = new Date();
  const diferenca = agora - data;

  const dias = Math.floor(diferenca/(1000 * 60 * 60 * 24));

  const horas = Math.floor((diferenca/(1000 * 60 * 60)) % 24);

  const minutos = Math.floor((diferenca/(1000 * 60)) % 60);

  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById(id).textContent = `${dias} dia, ${horas}hrs ${minutos}min ${segundos}s`;
}

setInterval(() => {
  atualizarContador(dataInicio, "dias1");
  atualizarContador(dataInicio1, "dias2");
  atualizarContador(dataInicio2, "dias3");
}, 1000);


// Cria um observador para monitorar se os elementos aparecem na tela
const myObserver = new IntersectionObserver((entries) => {

  // Para cada elemento observado...
  entries.forEach((entry) =>{

    // Se o elemento estiver visível na tela...
    if(entry.isIntersecting){
      // Adiciona a classe 'show' para ativar a animação
      entry.target.classList.add('show')
    }
    else{
      // Se sair da tela, remove a classe 'show'
      entry.target.classList.remove('show');
    }
  });
});

// Seleciona todos os elementos com a classe 'hidden' no HTML

const elements = document.querySelectorAll('.hidden, .hidden1');

// Para cada elemento selecionado...
elements.forEach((element) => {
  // Ativa o observador para esse elemento
  myObserver.observe(element);
});

const audio = document.getElementById("musica");
const playPauseBtn = document.getElementById("playPause");
const statusText = document.getElementById("status");

playPauseBtn.addEventListener("click", () =>{
  if(audio.paused){
    audio.play();
    playPauseBtn.textContent = "⏸️";
    statusText.textContent = "Tocando";
  }
  else{
    audio.pause();
    playPauseBtn.textContent = "▶️";
    statusText.textContent = "Pausado";
  }
});