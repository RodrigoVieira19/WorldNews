let h1 = document.querySelector('.news-bg-texts h1');

function typeWriter(elemento, text, index) {
  if (index < text.length) {
    elemento.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => {
      typeWriter(elemento, text, index);
    }, 70);
  } else {
    setTimeout(() => {
      elemento.innerHTML = '';
      let nextIndex = (currentIndex + 1) % phrases.length;
      
      typeWriter(elemento, phrases[nextIndex], 0);
      currentIndex = nextIndex;
    }, 2000);
  }
}

let phrases = ['entertainment 🍿', 'news 24 hours 📺', 'economy 📈', 'everything is here, anytime 📍', 'WorldNews']
let currentIndex = 0;

typeWriter(h1, phrases[currentIndex], 0);




