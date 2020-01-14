const { Router } = require('express')
const routes = Router()
const axios = require('axios')
const Dev = require('./models/Dev')

routes.post('/devs', async (req,res) => {
    const { github_username,techs } = req.body
    const { name = login, avatar_url, bio } = (await axios.get(`https://api.github.com/users/${github_username}`)).data
    console.log(`${name},${bio},${avatar_url}`)
    
    const techsArray = techs.split(',').map(item => item.trim())
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs:techsArray
    })
    return res.json(dev)
})

module.exports = routes