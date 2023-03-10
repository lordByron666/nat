const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const CryptoJS = require("crypto-js");

const orm = require("../Database/dataBase.orm");
const sql = require("../Database/dataBase.sql");
const helpers = require("./helpers");

passport.use(
	"local.signin",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const rows = await orm.client.findOne({
				where: { usernameClient: username },
			});
			if (rows) {
				const user = rows;
				const contraseña = await CryptoJS.AES.decrypt(
					user.passwordClient,
					"secret"
				);
				const validPassword = contraseña.toString(CryptoJS.enc.Utf8);
				if (validPassword == password) {
					done(
						null,
						user,
						req.flash(
							"message",
							"Bienvenido" + " " + user.usernameClient
						)
					);
				} else {
					done(null, false, req.flash("message", "Datos incorrectos"));
				}
			} else {
				return done(
					null,
					false,
					req.flash("message", "El nombre de usuario no existe.")
				);
			}
		}
	)
);

passport.use(
	"local.signup",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const usuarios = await orm.client.findOne({
				where: { usernameClient: username },
			});
			if (usuarios === null) {
				const {
					idUsuarios,
					nameClient,
					lastNameClient,
					typeIdentificationClient,
					identifiacationCardClient,
					emailClient,
					phoneClient,
					nameTypePerson,
					nameGener,
				} = req.body;
				let newClient = {
					nameClient,
					lastNameClient,
					typeIdentificationClient,
					identifiacationCardClient,
					emailClient,
					phoneClient,
					usernameClient: username,
					passwordClient: password,
				};
				newClient.nameClient = await helpers.encryptPassword(
					nameClient
				);
				newClient.lastNameClient = await helpers.encryptPassword(
					lastNameClient
				);
				newClient.typeIdentificationClient =
					await helpers.encryptPassword(typeIdentificationClient);
				newClient.identifiacationCardClient =
					await helpers.encryptPassword(identifiacationCardClient);
				newClient.emailClient = await helpers.encryptPassword(
					emailClient
				);
				newClient.phoneClient = await helpers.encryptPassword(
					phoneClient
				);
				newClient.passwordClient = await helpers.encryptPassword(
					password
				);

				let newDetail = {
					clientIdClient: idUsuarios,
					generIdGener: nameGener,
					typePersonIdTypePerson: nameTypePerson,
				};

				const resultado = await orm.client.create(newClient);
				await orm.clientDetail.create(newDetail);

				newClient.id = resultado.insertId;

				const imagenUsuario = req.files.imagenUsuario;
				const validacion = path.extname(imagenUsuario.name);

        const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif", ".JFIF"];

				if (!extencion.includes(validacion)) {
					req.flash("success", "Imagen no compatible.");
				}

				if (!req.files) {
					req.flash("success", "Imagen no insertada.");
				}

				const ubicacion =
					__dirname + "/../public/img/user/" + imagenUsuario.name;
				const ubicacion2 =
					__dirname +
					"/../../../adminevents/src/public/img/user" +
					imagenUsuario.name;

				imagenUsuario.mv(ubicacion, function (err) {
					if (err) {
						return req.flash("message", err);
					}
					sql.query(
						"UPDATE clients SET imagesClient = ? WHERE idClient = ?",
						[imagenUsuario.name, idUsuarios]
					);
					console.log("Imagen de usuario ingresada");
				});

				imagenUsuario.mv(ubicacion2, function (err) {
					if (err) {
						console.log(err);
						return req.flash("message", err);
					}
				});

				return done(null, newClient);
			} else {
				if (usuarios) {
					const usuario = usuarios;
					if (username == usuario.username) {
						done(
							null,
							false,
							req.flash(
								"message",
								"El nombre de usuario ya existe."
							)
						);
					} else {
						const {
							idUsuarios,
							nameClient,
							lastNameClient,
							typeIdentificationClient,
							identifiacationCardClient,
							emailClient,
							phoneClient,
							nameTypePerson,
							nameGener,
						} = req.body;
						let newClient = {
							nameClient,
							lastNameClient,
							typeIdentificationClient,
							identifiacationCardClient,
							emailClient,
							phoneClient,
							usernameClient: username,
							passwordClient: password,
						};
						newClient.nameClient = await helpers.encryptPassword(
							nameClient
						);
						newClient.lastNameClient =
							await helpers.encryptPassword(lastNameClient);
						newClient.typeIdentificationClient =
							await helpers.encryptPassword(
								typeIdentificationClient
							);
						newClient.identifiacationCardClient =
							await helpers.encryptPassword(
								identifiacationCardClient
							);
						newClient.emailClient = await helpers.encryptPassword(
							emailClient
						);
						newClient.phoneClient = await helpers.encryptPassword(
							phoneClient
						);
						newClient.password = await helpers.encryptPassword(
							password
						);

						let newDetail = {
							clientIdClient: idUsuarios,
							generIdGener: nameGener,
							typePersonIdTypePerson: nameTypePerson,
						};

						const resultado = await orm.client.create(newClient);
						await orm.clientDetail.create(newDetail);

						newClient.id = resultado.insertId;

						const imagenUsuario = req.files.imagenUsuario;
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

						const ubicacion =
							__dirname +
							"/../public/img/user/" +
							imagenUsuario.name;

						imagenUsuario.mv(ubicacion, function (err) {
							if (err) {
								return req.flash("message", err);
							}
							sql.query(
								"UPDATE clients SET imagesClient = ? WHERE idClient = ?",
								[imagenUsuario.name, idUsuarios]
							);
							console.log("Imagen de usuario ingresada");
						});

						return done(null, newClient);
					}
				}
			}
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
