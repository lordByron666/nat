const dotenv = require('dotenv');
dotenv.config();

const app = require('../eventsClient/src/app');

app.listen(app.get('port'));
console.log('El servidor esta en el puerto', app.get('port'));