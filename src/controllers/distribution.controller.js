const distributionCtl = {};

const path = require("path");
const orm = require("../Database/dataBase.orm");
const sql = require("../Database/dataBase.sql");

distributionCtl.showDistribution = async (req, res) => {
	const list = await sql.query("select*from distributions");
	res.render("events/localityPass", { list });
};
module.exports = distributionCtl;
