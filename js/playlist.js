
const playlist = [
  {
    title: "Sunflower",
    artist: "post malone",
    src: "Canciones/y2mate.com - Post Malone Swae Lee  Sunflower SpiderMan Into the SpiderVerse.mp3",
   
  },
  {
    title: "Valasy",
    artist: "Nürnberg",
    src: "Canciones/y2mate.com - Nürnberg  Valasy  Sub Español.mp3",
   
  },

 { 
    title: "Donde estan mis amigos",
    artist: "Depresion Sonora",
    src: "Canciones/y2mate.com - Depresión Sonora  Dónde Están mis Amigos.mp3 ",
    

  }
];


let currentTrack = 0;
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const volume = document.getElementById("volume-slider");
const progressBar = document.getElementById("progress-bar");

let slide = document.querySelectorAll('.image-fluid');

let currentIndex = 0;
  let slides = slide;
  let totalslides = slides.length; 
  

  function showSlide(index) {
      // Ocultar todos los elementos en el NodeList o array de slides
      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
  
      // Mostrar el elemento en la posición 'index'
      if (index >= 0 && index < slides.length) {
          slides[index].style.display = 'block';
      }
  }     showSlide(currentIndex);   



function loadTrack(track) {
  audioPlayer.src = playlist[track].src;
  audioPlayer.load();
}





loadTrack(currentTrack);

playBtn.addEventListener("click", () => {

  audioPlayer.play();

});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
});

prevBtn.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
    loadTrack(currentTrack);
    audioPlayer.play();

    currentIndex = (currentIndex - 1 + totalslides) % totalslides;
    showSlide(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentTrack < playlist.length - 1) {
    currentTrack++;}
    else { 
      currentTrack = 0;
    }
    loadTrack(currentTrack);
    audioPlayer.play();


    currentIndex = (currentIndex + 1) % totalslides;
    showSlide(currentIndex);

  }
);


volume.addEventListener('input' , ()   =>  { 

  audioPlayer.volume = volume.value;

}


);


audioPlayer.addEventListener('timeupdate' ,  () => {

  const progress = audioPlayer.currentTime / audioPlayer.duration;

  progressBar.value = progress;

 } );


 function seek(event) {
  
  const rect = progressBar.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const progressBarWidth = progressBar.offsetWidth;
  const progress = offsetX / progressBarWidth;
  const newTime = progress * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
}



let valorCancion = document.getElementById('progressbar').value;


// Agrega un evento para detectar cuando la canción ha terminado
valorCancion.addEventListener('ended', () => { 



  if (currentTrack < playlist.length - 1) {
    currentTrack++;}
    else { 
      currentTrack = 0;
    }
    loadTrack(currentTrack);
    audioPlayer.play();


    currentIndex = (currentIndex + 1) % totalslides;
    showSlide(currentIndex);
  

});


  




