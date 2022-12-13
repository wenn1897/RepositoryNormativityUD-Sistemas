import config from './config'

import normasRoutes from './routes/normas.routes'

const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
app.set('port', config.port || 3000);
app.set('json spaces',2);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Middlewares
app.use(express.json()); // para que mi servidor entienda este formato
app.use(morgan('dev')); //informacion por consola sobre lo que pasa con el servidor
app.use(express.urlencoded({extended: false})) //recibe datos que vienen desde form html

//Routers
app.use(normasRoutes)


//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port' + app.get('port'));
});


