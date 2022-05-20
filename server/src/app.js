const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routers/planets/planets.router.js');

const app =express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
//app.use(express.json);
app.use('/planets',planetsRouter);
console.log('app');



module.exports=app;