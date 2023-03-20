function playSound(e) {
    const audio = document.querySelectorAll(`audio[data-key="${e.code}"]`);
    const key = document.querySelectorAll(`.key[data-key="${e.code}"]`);
    if(!audio[0]){return;} //stop the function from running all together
    audio[0].currentTime = 0; // rewind to the start
    audio[0].play(); 
    key[0].classList.add('playing')
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);