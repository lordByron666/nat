const navegationControler = {}

navegationControler.showDates = async (req, res) => {
    const eventos = await sql.query('selelct * from events')
    const categoria = await sql.query('select * from categories')
    const fechaInicio = await sql.query('select min(dateInitEvent) as minimo from events ')
    const fechaMaxima = await sql.query('select max(dateInitEvent) as maximo from events ')
    const tipoCategoria = await sq.query('select * from modalitys')
    res.render("events/listEvents", { eventos, categoria, fechaInicio, fechaMaxima, tipoCategoria})
}

module.exports = navegationControler