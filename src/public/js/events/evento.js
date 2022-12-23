class modal {
    constructor() {
        this.precioEleccion = document.getElementById('precioEleccion')
        this.pagado = document.getElementById('pagado')
        this.precio = document.getElementById('precio')
    }
    inicio() {
        this.precio.style.display = 'none'
    }
    si() {
        this.precioEleccion.style.display = 'none'
        this.precio.style.display = 'block'
    }
}

let modals = new modal()
window.onload = modals.inicio()