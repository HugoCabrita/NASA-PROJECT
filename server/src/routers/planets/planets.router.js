const express = require('express');

const {getAllPlanets} = require('./planets.controller.js');

const planetsRouter = express.Router();

planetsRouter.get('/',getAllPlanets);
console.log('router');
module.exports=planetsRouter;