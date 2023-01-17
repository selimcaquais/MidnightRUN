let mute = document.querySelector('.mute');
let onmute = document.querySelector('.onmute');
let audio = document.querySelector('audio');

mute.addEventListener('click',event=>{
  onmute.style.display = 'block';
  mute.style.display = 'none';
  audio.muted = true;

})
onmute.addEventListener('click',event=>{
  onmute.style.display = 'none';
  mute.style.display = 'block';
  audio.muted = false;
})
