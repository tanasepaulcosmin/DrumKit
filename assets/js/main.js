

function playSound(event){
  console.log(event);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
 
  // console.log(audio);
  console.log(key);

  // we stop the function from running all together
  if (!audio){
    return
  }else{
  // return to the start
  audio.currentTime=0;
  audio.play();
  }
  key.classList.add('playing');
}

function removeTransition(event){
  // console.log(event);
  // if its is not a transform we skip it
  if(event.propertyName !== 'transform'){
    return;
  }
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);