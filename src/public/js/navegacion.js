class navegacion {
	constructor() {
		this.menu = document.getElementById("hamburguesa");
		this.nav = document.getElementById("nav");
		this.abajo = document.getElementById("cierra");
		this.ocultar = document.getElementById("ocultar");
	}

	aparicion() {
		if (this.menu.style.display == "block") {
			this.nav.style.display = "none";
			this.menu.style.display = "none";
			this.abajo.style.display = "block";
			this.ocultar.style.display = "block";
		}
	}

	botonMenu() {
		this.nav.style.display = "block";
		this.menu.style.display = "block";
		this.abajo.style.display = "none";
		this.ocultar.style.display = "none";
	}
}

let menus = new navegacion();
