const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const {mongooseConnect} = require('./database');
mongooseConnect();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

app.use('/empleados', require('./routes/empleados.routes'));
app.use('/producto', require('./routes/productos.routes'));

//puerto de escucha
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto:', app.get('port'));
});
