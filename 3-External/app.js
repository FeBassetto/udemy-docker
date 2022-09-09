const express = require("express")
const app = express()
const port = 3000

const axios = require('axios')
const api = axios.create({
    baseURL: "https://randomuser.me/api"
})

app.get('/', async (req, res) => {
    const user = await api.get()
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err.data
        })

    res.json({user})
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})