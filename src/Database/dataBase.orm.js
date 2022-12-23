const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");

const dbName = process.env.DB_SCHEMAS || "events";

mysql.createConnection({
	host: process.env.DB_HOST || "127.0.0.1",
	port: process.env.DB_PORT || "3306",
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || "",
	//password: process.env.DB_PASSWORD || '1998',
})
	.then((connection) => {
		connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
			console.info("Base de datos creada o comprobada correctamente");
		});
	});

const userModel = require("../models/user");
const rolModel = require("../models/rol");
const rolUserModel = require("../models/rolUser");
const attendaceModel = require("../models/attendance");
const attendaceDetailsModel = require("../models/attendanceDetails");
const categoryModel = require("../models/category");
const eventsModel = require("../models/event");
const eventDetailsModel = require("../models/eventDetails");
const membershipModel = require("../models/membership");
const suscriptionModel = require("../models/suscription");
const ticketBuyModel = require("../models/ticketBuy");
const ticketsModel = require("../models/tickets");
const ubicationEventModel = require("../models/ubicationEvents");
const ubicationUserModel = require("../models/ubicationUser");
const generModelo = require("../models/gener");
const eventConfirmModel = require("../models/eventConfirm");
const typePersonModel = require("../models/typePerson");
const paymentTypeEventModel = require("../models/paymentTypeEvent");
const contentPageModel = require("../models/contentPage");
const infoContactModel = require("../models/infoContact");
const clientModel = require("../models/client");
const clientDetailModel = require("../models/clientDetail");
const categoryDetailsModel = require("../models/categoryDetail");
const modalityModel = require("../models/modality");
const socialMediaModel = require("../models/socialMedia");
const distributionModel = require("../models/distribution")

const sequelize = new Sequelize("events", "root", "", {
	//'1998',{
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 10,
		min: 0,
		require: 30000,
		idle: 10000,
	},
});

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

//sincronia
const user = userModel(sequelize, Sequelize);
const rol = rolModel(sequelize, Sequelize);
const rolUser = rolUserModel(sequelize, Sequelize);
const attendace = attendaceModel(sequelize, Sequelize);
const attendaceDetails = attendaceDetailsModel(sequelize, Sequelize);
const category = categoryModel(sequelize, Sequelize);
const events = eventsModel(sequelize, Sequelize);
const eventDetails = eventDetailsModel(sequelize, Sequelize);
const membership = membershipModel(sequelize, Sequelize);
const suscription = suscriptionModel(sequelize, Sequelize);
const ticketBuy = ticketBuyModel(sequelize, Sequelize);
const tickets = ticketsModel(sequelize, Sequelize);
const ubicationEvent = ubicationEventModel(sequelize, Sequelize);
const ubicationUser = ubicationUserModel(sequelize, Sequelize);
const gener = generModelo(sequelize, Sequelize);
const eventConfirm = eventConfirmModel(sequelize, Sequelize);
const typePerson = typePersonModel(sequelize, Sequelize);
const paymentTypeEvent = paymentTypeEventModel(sequelize, Sequelize);
const infoContact = infoContactModel(sequelize, Sequelize);
const contentPage = contentPageModel(sequelize, Sequelize);
const client = clientModel(sequelize, Sequelize);
const clientDetail = clientDetailModel(sequelize, Sequelize);
const categoryDetails = categoryDetailsModel(sequelize, Sequelize);
const modality = modalityModel(sequelize, Sequelize);
const socialMedia = socialMediaModel(sequelize, Sequelize);
const distribution = distributionModel(sequelize, Sequelize);

//relaciones
rolUser.hasMany(gener);
gener.belongsTo(rolUser);

rolUser.hasMany(infoContact);
infoContact.belongsTo(rolUser);

rolUser.hasMany(contentPage);
contentPage.belongsTo(rolUser);

rolUser.hasMany(eventConfirm);
eventConfirm.belongsTo(rolUser);

events.hasMany(eventConfirm);
eventConfirm.belongsTo(events);

user.hasMany(rolUser);
rolUser.belongsTo(user);

rol.hasMany(rolUser);
rolUser.belongsTo(rol);

rolUser.hasMany(rol);
rol.belongsTo(rolUser);

rolUser.hasMany(suscription);
suscription.belongsTo(rolUser);

rolUser.hasMany(membership);
membership.belongsTo(rolUser);

rolUser.hasMany(ubicationUser);
ubicationUser.belongsTo(rolUser);

rolUser.hasMany(tickets);
tickets.belongsTo(rolUser);

rolUser.hasMany(paymentTypeEvent);
paymentTypeEvent.belongsTo(rolUser);

rolUser.hasMany(typePerson);
typePerson.belongsTo(rolUser);

rolUser.hasMany(category);
category.belongsTo(rolUser);

client.hasMany(events);
events.belongsTo(client);

client.hasMany(ticketBuy);
ticketBuy.belongsTo(client);

client.hasMany(ubicationEvent);
ubicationEvent.belongsTo(client);

client.hasMany(attendace);
attendace.belongsTo(client);

category.hasMany(categoryDetails);
categoryDetails.belongsTo(category);
//evento
events.hasMany(tickets);
tickets.belongsTo(events);

modality.hasMany(events);
events.belongsTo(modality);

socialMedia.hasMany(events);
events.belongsTo(socialMedia);

category.hasMany(events);
events.belongsTo(category);

categoryDetails.hasMany(events);
events.belongsTo(categoryDetails);

events.hasMany(eventDetails);
eventDetails.belongsTo(events);

events.hasMany(ubicationEvent);
ubicationEvent.belongsTo(events);

events.hasMany(attendaceDetails);
attendaceDetails.belongsTo(events);
//tickets
tickets.hasMany(ticketBuy);
ticketBuy.belongsTo(tickets);
//asistencia
attendace.hasMany(attendaceDetails);
attendaceDetails.belongsTo(attendace);
//otros

paymentTypeEvent.hasMany(eventConfirm);
eventConfirm.belongsTo(paymentTypeEvent);

client.hasMany(clientDetail);
clientDetail.belongsTo(client);

gener.hasMany(clientDetail);
clientDetail.belongsTo(gener);

typePerson.hasMany(clientDetail);
clientDetail.belongsTo(typePerson);

//sistema de Boletaje
distribution.hasMany(events);
events.belongsTo(distribution);

client.hasMany(eventDetails)
eventDetails.belongsTo(client)

module.exports = {
	user,
	rol,
	rolUser,
	attendace,
	attendaceDetails,
	category,
	events,
	eventDetails,
	membership,
	suscription,
	ticketBuy,
	tickets,
	ubicationEvent,
	ubicationUser,
	gener,
	eventConfirm,
	typePerson,
	paymentTypeEvent,
	infoContact,
	contentPage,
	client,
	clientDetail,
	categoryDetails,
	modality,
	socialMedia,
	distribution	
};
