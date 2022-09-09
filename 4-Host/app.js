const express = require('express')
const app = express()
const mysql = require('mysql')

const port = 3000

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'felipe',
    password: '#2003Felipe',
    database: 'Docker'
})

app.get('/', (req, res) => {

    const query = `SELECT * FROM person`

    pool.query(query, (err, data) => {

        if (err) {
            console.log(err)
            res.status(404).send({error:"Error"})
        }

        res.json(data)

    })

})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})