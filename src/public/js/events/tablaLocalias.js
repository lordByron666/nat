class localidad {
    constructor(){
        this.si = document.getElementById("si")
        this.no = document.getElementById("no")
        this.participantes= document.getElementById("numLocalias"),
        this.tablaDinamica = document.getElementById("tablaDinamica")
        this.TablaLocalias = document.getElementById("TablaLocalias")
        
    }
    inicio(){
        this.TablaLocalias.style.display = "none"
    }
    Si(){
        this.TablaLocalias.style.display = "block"
        for(let i=0; i<parseInt(this.participantes.value); i++){
            this.tablaDinamica.innerHTML = '<input type="text" name="" id="localidad">  <input type="text" name="" id="Máximo de Participantes"> <input type="text" name="" id="Precio">' 
        }
    }
    No(){
        this.TablaLocalias.style.display = "none"
        
    }
}
let localidades = new localidad()
window.onload = localidades.inicio