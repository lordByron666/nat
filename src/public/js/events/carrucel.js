class carrucel {
    constructor() {
        this.imagenCarrucel = document.getElementsByName('imagenCarrucel')
    }

    inicio() {
        cambioImagenes.imagenCarrucel[1].style.display = "none"
        cambioImagenes.imagenCarrucel[2].style.display = "none"
        cambioImagenes.imagenCarrucel[3].style.display = "none"
    }

    metodo() {
        setTimeout(cambioImagenes.metodo1, 5000);
        cambioImagenes.imagenCarrucel[0].style.display = "none"
        cambioImagenes.imagenCarrucel[1].style.display = "block"
    }

    metodo1() {
        setTimeout(cambioImagenes.metodo2, 5000);
        cambioImagenes.imagenCarrucel[1].style.display = "none"
        cambioImagenes.imagenCarrucel[2].style.display = "block"
    }

    metodo2() {
        setTimeout(cambioImagenes.metodo3, 5000);
        cambioImagenes.imagenCarrucel[2].style.display = "none"
        cambioImagenes.imagenCarrucel[3].style.display = "block"
    }
    metodo3() {
        setTimeout(cambioImagenes.metodo, 5000);
        cambioImagenes.imagenCarrucel[3].style.display = "none"
        cambioImagenes.imagenCarrucel[0].style.display = "block"
    }
}

let cambioImagenes = new carrucel()

window.onload = cambioImagenes.inicio()
window.onload = cambioImagenes.metodo()
