const Dev = require('./DevController')
const parseStringAsArray = require('./utils/parseStringAsArray')

module.exports = {
    async index(req,res){
        const { latitude, longitude, techs } = req.query
        const techsArray =  parseStringAsArray(techs)
        res.json(techsArray)
    }
}