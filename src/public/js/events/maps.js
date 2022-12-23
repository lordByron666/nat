class mapa {
    constructor() {
    }

    inicio() {
        let map = L.map('maps').setView([-1.1000000, -83.9000000], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(map);

        document.getElementById('selecion').addEventListener('change', function (e) {
            let coords = e.target.value.split(",");
            map.flyTo(coords, 13);
        })
    }
}

let maps = new mapa()
window.onload = maps.inicio()