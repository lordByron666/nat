const indexCtl = {};

const sql = require("../Database/dataBase.sql");

indexCtl.show = async (req, res) => {
	const list = await sql.query("select * from geners");

	/* Genero */
	const datosGenero = await sql.query("SELECT * FROM geners");

	if (datosGenero.length == 0) {
		const genero = datosGenero[0];

		if (genero === undefined) {
			await sql.query(
				"INSERT INTO geners (idGener, nameGener) VALUES ('1', 'Femenino');"
			);

			await sql.query(
				"INSERT INTO geners (idGener, nameGener) VALUES ('2', 'Masculino');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Género.");
	}

	/* Tipo de Persona */
	const datosTipoPersona = await sql.query("SELECT * FROM typepersons");

	if (datosTipoPersona.length == 0) {
		const tipoPersona = datosTipoPersona[0];

		if (tipoPersona === undefined) {
			await sql.query(
				"INSERT INTO typepersons (idTypePerson, nameTypePerson) VALUES ('1', 'Natural');"
			);

			await sql.query(
				"INSERT INTO typepersons (idTypePerson, nameTypePerson) VALUES ('2', 'Jurídica');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Tipo de Persona.");
	}

	/* Categoría */
	const datosCategoria = await sql.query("SELECT * FROM categorys");

	if (datosCategoria.length == 0) {
		const categoria = datosCategoria[0];

		if (categoria === undefined) {
			await sql.query(
				"INSERT INTO categorys (idCategory, imageCategory, nameCategory) VALUES ('1', 'Distraccion.jpg', 'Distracción')"
			);

			await sql.query(
				"INSERT INTO categorys (idCategory, imageCategory, nameCategory) VALUES ('2', 'capacitaciones.jpg', 'Capacitación');"
			);

			await sql.query(
				"INSERT INTO categorys (idCategory, imageCategory, nameCategory) VALUES ('3', 'deportes.jpg', 'Deportes');"
			);

			await sql.query(
				"INSERT INTO categorys (idCategory, imageCategory, nameCategory) VALUES ('4', 'exposiciones.jpg', 'Exposiciones');"
			);

			await sql.query(
				"INSERT INTO categorys (idCategory, imageCategory, nameCategory) VALUES ('5', 'turismo.jpg', 'Turístico');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Categoria.");
	}

	/* Sub-Categoría */
	const datosSubCategoria = await sql.query("SELECT * FROM categorydetails");

	if (datosSubCategoria.length == 0) {
		const subCategoria = datosSubCategoria[0];

		if (subCategoria === undefined) {
			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('1', 'Conciertos Musicales', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('2', 'Danza', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('3', 'Baile', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('4', 'Festival', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('5', 'Recital', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('6', 'Teatral', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('7', 'Humorístico', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('8', 'Magia', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('9', 'Frego', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('10', 'Farra', '1');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('11', 'Cursos', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('12', 'Talleres', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('13', 'Diplomados', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('14', 'Maestrias', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('15', 'Conferecias', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('16', 'Congresos', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('17', 'Mentorias', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('18', 'Foros', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('19', 'Seminarios', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('20', 'Webinar', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('21', 'Charlas', '2');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('22', 'Partidos', '3');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('23', 'Campeonatos', '3');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('24', 'Torneos', '3');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('25', 'Carreras', '3');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('26', 'Competencias', '3');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('27', 'Maratón', '3');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('28', 'Caminata', '3');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('29', 'Lanzamientos', '4');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('30', 'Inaguraciones', '4');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('31', 'Desfiles', '4');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('32', 'Ferias', '4');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('33', 'Presentaciones', '4');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('34', 'Convenciones', '4');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('35', 'Networking', '4');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('36', 'Viajes', '5');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('37', 'Recorridos', '5');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('38', 'Tour', '5');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('39', 'Feriados', '5');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('40', 'Destinos', '5');"
			);

			await sql.query(
				"INSERT INTO categorydetails (idCategoryDetails, nameCategoryDetails, categoryIdCategory) VALUES ('41', 'Promociones', '5');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Sub-Categoría.");
	}

	/* Modalidad */
	const datosModalidad = await sql.query("SELECT * FROM modalitys");

	if (datosModalidad.length == 0) {
		const Modalidad = datosModalidad[0];

		if (Modalidad === undefined) {
			await sql.query(
				"INSERT INTO modalitys (idModality, nameModality) VALUES ('1', 'Presencial');"
			);

			await sql.query(
				"INSERT INTO modalitys (idModality, nameModality) VALUES ('2', 'Virtual');"
			);

			await sql.query(
				"INSERT INTO modalitys (idModality, nameModality) VALUES ('3', 'Mixto');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Modalidad.");
	}
	/* TipoIdentificacion */
	const datosTipoIdentificacion = await sql.query("SELECT * FROM modalitys");

	if (datosTipoIdentificacion.length == 0) {
		const TipoIdentificacion = datosTipoIdentificacion[0];

		if (TipoIdentificacion === undefined) {
			await sql.query(
				"INSERT INTO modalitys (idModality, nameModality) VALUES ('1', 'Cédula');"
			);

			await sql.query(
				"INSERT INTO modalitys (idModality, nameModality) VALUES ('2', 'Pasaporte');"
			);

			await sql.query(
				"INSERT INTO modalitys (idModality, nameModality) VALUES ('3', 'RUC');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Tipo de Identificación.");
	}

	/* Provincia *
	const datosProvincia = await sql.query("SELECT * FROM provinces");

	if (datosProvincia.length == 0) {
		const Provincia = datosProvincia[0];

		if (Provincia === undefined) {
			await sql.query(
				"INSERT INTO provinces (idProvince, nameProvince) VALUES ('1', 'Azuay');"
			);

			await sql.query(
				"INSERT INTO provinces (idProvince, nameProvince) VALUES ('2', 'Bolívar');"
			);

			await sql.query(
				"INSERT INTO provinces (idProvince, nameProvince) VALUES ('3', 'Cañar');"
			);

			await sql.query(
				"INSERT INTO provinces (idProvince, nameProvince) VALUES ('4', 'Carchi');"
			);

			await sql.query(
				"INSERT INTO provinces (idProvince, nameProvince) VALUES ('5', 'Chimborazo');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Provincia.");
	}

	/* Ciudad *
	const datosCiudad = await sql.query("SELECT * FROM citys");

	if (datosCiudad.length == 0) {
		const Ciudad = datosCiudad[0];

		if (Ciudad === undefined) {
			await sql.query(
				"INSERT INTO citys (idCity, nameCity, provinceIdProvince) VALUES ('1', 'Cuenca', '1');"
			);

			await sql.query(
				"INSERT INTO citys (idCity, nameCity, provinceIdProvince) VALUES ('2', 'Guaranda', '2');"
			);

			await sql.query(
				"INSERT INTO citys (idCity, nameCity, provinceIdProvince) VALUES ('3', 'Azogues', '3');"
			);

			await sql.query(
				"INSERT INTO citys (idCity, nameCity, provinceIdProvince) VALUES ('4', 'Tulcán', '4');"
			);

			await sql.query(
				"INSERT INTO citys (idCity, nameCity, provinceIdProvince) VALUES ('5', 'Latacunga', '5');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Ciudad.");
	}

	/* Parroquia *
	const datosParroquia = await sql.query("SELECT * FROM parishs");

	if (datosParroquia.length == 0) {
		const Parroquia = datosParroquia[0];

		if (Parroquia === undefined) {
			await sql.query(
				"INSERT INTO parishs (idParish, nameParish, cityIdCity) VALUES ('1', 'Bellavista', '1');"
			);

			await sql.query(
				"INSERT INTO parishs (idParish, nameParish, cityIdCity) VALUES ('2', 'Ángel Polibio Cháves', '2');"
			);

			await sql.query(
				"INSERT INTO parishs (idParish, nameParish, cityIdCity) VALUES ('3', 'Azogues', '3');"
			);

			await sql.query(
				"INSERT INTO parishs (idParish, nameParish, cityIdCity) VALUES ('4', 'Tulcán', '4');"
			);

			await sql.query(
				"INSERT INTO parishs (idParish, nameParish, cityIdCity) VALUES ('5', 'Latacunga', '5');"
			);
		}
	} else {
		console.log("Ya esta creado los datos de Parroquia.");
	}*/

	res.render("index", { list });
};

module.exports = indexCtl;
