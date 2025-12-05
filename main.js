// Changement du curseur au clic
document.addEventListener('mousedown', () => {
    document.body.classList.add('is-grabbing');
});

document.addEventListener('mouseup', () => {
    document.body.classList.remove('is-grabbing');
});

// Lancement au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Duplication du texte défilant (pour fluidité)
    const track = document.querySelector('.ticker-track');
    if (track) track.innerHTML = track.innerHTML.repeat(4);

    // 2. Compteur de temps (Uptime)
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

    // 3. Animation "Hacker" sur le titre
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
                        
                        // Affiche la vraie lettre si l'itération est passée
                        if (index < Math.floor(iteration)) {
                            return originalText[index];
                        }
                        
                        // Sinon affiche un caractère aléatoire
                        return letters[Math.floor(Math.random() * lettersLen)];
                    })
                    .join("");
            
                // Fin de l'animation
                if (iteration >= originalText.length) { 
                    clearInterval(interval);
                }
                iteration += 0.5; 
            }, 35);
        };
        
        // Déclenche l'effet au début et au survol
        scramble();
        title.addEventListener('mouseover', scramble);
    }
});