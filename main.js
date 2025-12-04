document.addEventListener('mousedown', () => {
    document.body.classList.add('is-grabbing');
});

document.addEventListener('mouseup', () => {
    document.body.classList.remove('is-grabbing');
});

document.addEventListener("DOMContentLoaded", () => {
    
    // Duplication pour le ticker
    const track = document.querySelector('.ticker-track');
    if (track) track.innerHTML = track.innerHTML.repeat(4);

    // Compteur d'uptime
    const uptimeElement = document.getElementById('uptime-counter');
    let seconds = 0;
    
    function updateUptime() {
        seconds++;
        const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        if(uptimeElement) uptimeElement.innerText = `UPTIME: ${hrs}:${mins}:${secs}`;
    }
    setInterval(updateUptime, 1000);

    //Effets pour le h1 "RÉSISTANCE"
    const title = document.querySelector('.hero-title');
    if (title) {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let interval = null;
        const scramble = () => {
            let iteration = 0;
            const originalText = title.dataset.value || title.innerText;
            const lettersLen = letters.length;
            
            clearInterval(interval);
            interval = setInterval(() => {
                title.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if (letter === " ") return " ";
                        if (index < Math.floor(iteration)) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * lettersLen)];
                    })
              .join("");
          
          if (iteration >= originalText.length) { 
              clearInterval(interval);
          }
          iteration += 1;
            }, 16);
        };
        scramble();
        //Se relance au hover
        title.addEventListener('mouseover', scramble);
    }
});
