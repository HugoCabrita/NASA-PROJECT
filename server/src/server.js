const http = require('http');

const app =require('./app.js');
const {loadPlanets} = require('./models/planets.model.js');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer()
{
    await loadPlanets();
}


server.listen(PORT,()=>
{
    console.log(`Listening on port ${PORT}...`);
});

console.log('server');
startServer();

// app.listen();


