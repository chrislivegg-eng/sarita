// 1. Configuración de Partículas (Corazones)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ff4d6d" },
        "shape": { 
            "type": "image",
            "image": {
                "src": "https://em-content.zobj.net/source/apple/354/heart-with-arrow_1f498.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": { "value": 0.6, "random": true },
        "size": { "value": 12, "random": true },
        "move": { "enable": true, "speed": 2, "direction": "top", "out_mode": "out" }
    }
});

// 2. Contador Exacto (Sara y Chris)
const fechaAniv = new Date(2022, 4, 25, 0, 0, 0); // 25 Mayo 2022

function updateTimer() {
    const ahora = new Date();
    const dif = ahora - fechaAniv;

    const d = Math.floor(dif / 86400000);
    const h = Math.floor((dif / 3600000) % 24);
    const m = Math.floor((dif / 60000) % 60);
    const s = Math.floor((dif / 1000) % 60);

    document.getElementById('d').innerText = d;
    document.getElementById('h').innerText = h;
    document.getElementById('m').innerText = m;
    document.getElementById('s').innerText = s;
}

setInterval(updateTimer, 1000);
updateTimer();

// 3. Animaciones
AOS.init({ duration: 1000, once: true });