const eventsCtl = {};

const path = require("path");
const orm = require("../Database/dataBase.orm");
const sql = require("../Database/dataBase.sql");

eventsCtl.showCategory = async (req, res) => {
	const list = await sql.query("select * from categorys");
	res.render("events/categoryList", { list });
};

eventsCtl.ubicacionRedSocial = async (req, res) => {
	res.render("events/ubicationEvent");
};

eventsCtl.show = async (req, res) => {
	const id = req.params.id;
	const modalidad = await sql.query("select * from modalitys");
	const category = await sql.query( "select * from categorys where idCategory = ?", [id]);
	const SubCategoria = await sql.query( "select * from categoryDetails where categoryIdCategory= ?", [id]);
	const maxId = await sql.query("select max(idEvent) as maximo from events");
	res.render("events/addEvents", { modalidad, category, SubCategoria, maxId });
};

eventsCtl.send = async (req, res) => {
	const id = req.user.idClient;
	const ids = req.params.id;
	const {
		idImagen,
		nameEvent,
		descriptionEvent,
		idModality,
		category,
		SubCategory,
		dateInitEvent,
		dateFinishEvent,
		hourInitEvent,
		hourFinishEvent,
		priceEvents,
	} = req.body;
	const newSend = {
		idEvent: idImagen,
		nameEvent,
		descriptionEvent,
		hourInitEvent,
		hourFinishEvent,
		dateInitEvent,
		dateFinishEvent,
		priceEvents,
		clientIdClient: id,
		modalityIdModality: idModality,
		categoryIdCategory: category,
		categoryDetailIdCategoryDetails: SubCategory,
	};

	if (priceEvents === "00.00") {
		newSend.stateEvent = "gratuito";
	} else {
		newSend.stateEvent = "pagado";
	}

	const nuevodetalle = {
		eventIdEvent: idImagen,
		clientIdClient: id
	}

	await orm.events.create(newSend);
	await orm.eventDetails.create(nuevodetalle)

	const imagenUsuario = req.files.imageEvent;
	const validacion = path.extname(imagenUsuario.name);
	const extencion = [
		".PNG",
		".JPG",
		".JPEG",
		".GIF",
		".TIF",
		".png",
		".jpg",
		".jpeg",
		".gif",
		".tif",
	];

	if (!extencion.includes(validacion)) {
		req.flash("success", "Imagen no compatible.");
	}

	if (!req.files) {
		req.flash("success", "Imagen no insertada.");
	}

	const ubicacion = __dirname + "/../public/img/events/" + imagenUsuario.name;

	imagenUsuario.mv(ubicacion, function (err) {
		if (err) {
			return req.flash("message", err);
		}
		sql.query("UPDATE events SET imageEvent = ? WHERE idEvent = ?", [
			imagenUsuario.name,
			idImagen,
		]);
		console.log("Imagen de usuario ingresada");
	});

	req.flash("success", "Evento Guardado.");
	res.redirect("/events/list/");
};

eventsCtl.list = async (req, res) => {
	const listEventsPagesLimit = await sql.query('select * from events where stateEvent = "pagado"  LIMIT 5');
	const Distracción = await sql.query('select * from events where stateEvent = "pagado"');
	const Capacitación = await sql.query('select * from events where stateEvent = "pagado"');
	const Deportes = await sql.query('select * from events where stateEvent = "pagado"');
	const Exposiciones = await sql.query('select * from events where stateEvent = "pagado"');
	const Turístico = await sql.query('select * from events where stateEvent = "pagado"');

	res.render("events/listEvents", { listEventsPagesLimit,  });
};

eventsCtl.bring = async (req, res) => {
	const id = req.params.id;
	const modalidad = await sql.query("select * from modalitys");
	const category = await sql.query(
		"select * from categorys where idCategory = ?",
		[id]
	);
	const SubCategoria = await sql.query(
		"select * from categoryDetails where categoryIdCategory= ?",
		[id]
	);
	const list = await sql.query("select * from events where idEvent = ?", [
		id,
	]);
	res.render("events/editEvents", {
		list,
		modalidad,
		category,
		SubCategoria,
	});
};

eventsCtl.update = async (req, res) => {
	const id = req.user.idClient;
	const ids = req.params.id;
	const {
		nameEvent,
		descriptionEvent,
		idModality,
		category,
		SubCategory,
		priceEvents,
		dateInitEvent,
		dateFinishEvent,
		hourInitEvent,
		hourFinishEvent,
	} = req.body;
	const newSend = {
		nameEvent,
		descriptionEvent,
		priceEvents,
		dateInitEvent,
		dateFinishEvent,
		hourInitEvent,
		hourFinishEvent,
		clientIdClient: id,
		modalityIdModality: idModality,
		categoryIdCategory: category,
		categoryDetailIdCategoryDetails: SubCategory,
	};
	await orm.events.findOne({ where: { idEvent: ids } }).then((actualizar) => {
		actualizar.update(newSend);
	});

	const imagenUsuario = req.files.imageEvent;
	const validacion = path.extname(imagenUsuario.name);
	const extencion = [
		".PNG",
		".JPG",
		".JPEG",
		".GIF",
		".TIF",
		".png",
		".jpg",
		".jpeg",
		".gif",
		".tif",
	];

	if (!extencion.includes(validacion)) {
		req.flash("success", "Imagen no compatible.");
	}

	if (!req.files) {
		req.flash("success", "Imagen no insertada.");
	}

	const ubicacion = __dirname + "/../public/img/events/" + imagenUsuario.name;

	imagenUsuario.mv(ubicacion, function (err) {
		if (err) {
			return req.flash("message", err);
		}
		sql.query("UPDATE events SET imageEvent = ? WHERE idEvent = ?", [
			imagenUsuario.name,
			idUsuarios,
		]);
		console.log("Imagen de usuario ingresada");
	});

	res.flash("success", "Evento Guardado");
	res.redirect("/events/list/");
};

eventsCtl.detail = async (req, res) => {
	const id = req.params.id;
	const listDetail = await sql.query("select * from events where idEvent = ?", [id]);
	const ubicationEvent = await sql.query("select * from ubicationevents where eventIdEvent = ?", [id]);
	res.render("events/detailEvents", { listDetail, ubicationEvent });
};

eventsCtl.favorite = async (req, res) => {
	const id = req.user.idClient
	const { idEvento } = req.body
	const favorite = {
		favouriteEventDetail: "favorito"
	}
	await orm.eventDetails.findOne({ where: { eventIdEvent: idEvento } })
		.then(actualizar => {
			actualizar.update(favorite)
		})
	res.redirect('/events/list/')
}

eventsCtl.deleteFavorite = async (req, res) => {
	const id = req.user.idClient
	const { idfavorito, idEvento } = req.body
	const favorite = {
		favouriteEventDetail: "No favorito",
		eventIdEvent: idEvento,
		clientIdClient: id
	}
	await orm.eventDetails.findOne({ where: { idEventDetail: idfavorito } })
		.then(actualizar => {
			actualizar.update(favorite)
			res.redirect('/events/list/')
		})
}

module.exports = eventsCtl;
