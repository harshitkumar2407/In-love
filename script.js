
var emoji = ['😍', '🥰', '😘', '😻', '💖', '💘', '💝', '💗', '💕', '💞', '💓', '💟', '🌹','❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎'];
setInterval(() => {addEmoji();}, 200);
function addEmoji() {
    var h1 = document.createElement('h1');
    var randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
    h1.textContent = randomEmoji;
    h1.style.position = 'absolute';
    h1.style.top = Math.random() * window.innerHeight + 'px';
    h1.style.left = Math.random() * window.innerWidth + 'px';
    h1.style.fontSize = '5rem';
    h1.style.scale = (0.5 + Math.random()).toString();
    h1.style.userSelect = 'none';
    h1.style.pointerEvents = 'none';
   
    h1.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    h1.style.transform = 'translateY(0)';
    h1.style.opacity = '1';
    document.body.appendChild(h1);
    var counter = 0;

    var interval = setInterval(() => {
        counter++;
        h1.style.transform = `translateY(-${counter * 20}px)`;
        h1.style.opacity = `${1 - counter / 20}`;
        if (counter >= 500) {
            clearInterval(interval);
            document.body.removeChild(h1);
        }
    }, 150)}