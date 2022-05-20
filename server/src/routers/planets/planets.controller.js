const {planets} = require ('../../models/planets.model.js');

function getAllPlanets(req,res)
{
    console.log('Planets send');
    return res.status(200).json(planets);
    
}
console.log('controllers');

module.exports = {
getAllPlanets,
};