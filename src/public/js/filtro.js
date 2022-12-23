class filtro {
    constructor() {
        this.eleccion1 = document.getElementById('eleccion1')
        this.botonFecha1 = document.getElementById('botonFecha1')
        this.botonFecha2 = document.getElementById('botonFecha2')
        this.subEleccion1 = document.getElementById('subEleccion1')
        this.eleccion2 = document.getElementById('eleccion2')
        this.botonCategoria1 = document.getElementById('botonCategoria1')
        this.botonCategoria2 = document.getElementById('botonCategoria2')
        this.subEleccion2 = document.getElementById('subEleccion2')
        this.eleccion3 = document.getElementById('eleccion3')
        this.botonTipo1 = document.getElementById('botonTipo1')
        this.botonTipo2 = document.getElementById('botonTipo2')
        this.subEleccion3 = document.getElementById('subEleccion3')
        this.botonFiltro1 = document.getElementById('botonFiltro1')
        this.botonFiltro2 = document.getElementById('botonFiltro2')
        this.maximos = document.getElementById('maximos')
        this.minimos = document.getElementById('minimos')
        this.categoria = document.getElementById('categoria')
        this.tipoEventos = document.getElementById('tipoEventos')
    }
    inicio() {
        this.eleccion1.style.display = 'none'
        this.botonFecha2.style.display = 'none'
        this.subEleccion1.style.display = 'none'
        this.eleccion2.style.display = 'none'
        this.botonCategoria2.style.display = 'none'
        this.subEleccion2.style.display = 'none'
        this.eleccion3.style.display = 'none'
        this.botonFiltro2.style.display = 'none'
        this.botonTipo2.style.display = 'none'
        this.subEleccion3.style.display = 'none'
    }

    aparicion1() {
        this.botonFiltro1.style.display = 'none'
        this.botonFiltro2.style.display = 'block'
        this.eleccion1.style.display = 'block'
        this.eleccion2.style.display = 'block'
        this.eleccion3.style.display = 'block'
    }

    desaparicion1() {
        this.botonFiltro1.style.display = 'block'
        this.botonFiltro2.style.display = 'none'
        this.eleccion1.style.display = 'none'
        this.eleccion2.style.display = 'none'
        this.eleccion3.style.display = 'none'
    }

    aparicionEleccion1() {
        this.botonFecha1.style.display = 'none'
        this.botonFecha2.style.display = 'block'
        this.subEleccion1.style.display = 'block'
        this.eleccion2.style.display = 'none'
        this.eleccion3.style.display = 'none'
    }

    desaparicionEleccion1() {
        this.botonFecha1.style.display = 'block'
        this.botonFecha2.style.display = 'none'
        this.subEleccion1.style.display = 'none'
        this.eleccion2.style.display = 'block'
        this.eleccion3.style.display = 'block'
    }

    aparicionEleccion2() {
        this.botonCategoria1.style.display = 'none'
        this.botonCategoria2.style.display = 'block'
        this.subEleccion2.style.display = 'block'
        this.eleccion1.style.display = 'none'
        this.eleccion3.style.display = 'none'
    }

    desaparicionEleccion2() {
        this.botonCategoria1.style.display = 'block'
        this.botonCategoria2.style.display = 'none'
        this.subEleccion2.style.display = 'none'
        this.eleccion1.style.display = 'block'
        this.eleccion3.style.display = 'block'
    }

    aparicionEleccion3() {
        this.botonTipo1.style.display = 'none'
        this.botonTipo2.style.display = 'block'
        this.subEleccion3.style.display = 'block'
        this.eleccion1.style.display = 'none'
        this.eleccion2.style.display = 'none'
    }

    desaparicionEleccion3() {
        this.botonTipo1.style.display = 'block'
        this.botonTipo2.style.display = 'none'
        this.subEleccion3.style.display = 'none'
        this.eleccion1.style.display = 'block'
        this.eleccion2.style.display = 'block'
    }

    condicion1() {
        this.minimos.setAttribute('disabled', '')
        this.categoria.setAttribute('disabled', '')
        this.tipoEventos.setAttribute('disabled', '')
    }
    condicion2() {
        this.maximos.setAttribute('disabled', '')
        this.categoria.setAttribute('disabled', '')
        this.tipoEventos.setAttribute('disabled', '')
    }
    condicion3() {
        this.maximos.setAttribute('disabled', '')
        this.minimos.setAttribute('disabled', '')
        this.tipoEventos.setAttribute('disabled', '')
    }
    condicion4() {
        this.maximos.setAttribute('disabled', '')
        this.minimos.setAttribute('disabled', '')
        this.categoria.setAttribute('disabled', '')
    }
}

let filtros = new filtro()

window.onload = filtros.inicio()