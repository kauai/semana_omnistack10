const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const { github_username,techs,latitude,longitude } = req.body
        const { name = login, avatar_url, bio } = (await axios.get(`https://api.github.com/users/${github_username}`)).data
        console.log(`${name},${bio},${avatar_url}`)
        
        const techsArray = techs.split(',').map(item => item.trim())
        const location = {
            type:'Point',
            coordinates:[longitude,latitude]
        }
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs:techsArray,
            location
        })
        return res.json(dev)
    }
}