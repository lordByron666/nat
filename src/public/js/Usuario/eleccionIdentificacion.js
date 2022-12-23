class eleccion {
    constructor(){
        this.cedula = document.getElementById('cedula')
        this.pasaporte = document.getElementById('pasaporte')
    }
    
    elecion1 (){
        this.cedula.setAttribute("disabled", "");
    }
    
    elecion2 (){
        this.pasaporte.setAttribute("disabled", "");
    }
}

let elecciones = new eleccion()