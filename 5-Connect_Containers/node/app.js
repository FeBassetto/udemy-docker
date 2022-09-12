const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3000;

const bp = require('body-parser')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql_container',
    user: 'root',
    password: 'felipe',
    database: 'nodeDocker'
})

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {

    const query = `SELECT * FROM users`

    pool.query(query, (err, data) => {

        if (err) {
            return res.status(404).json({ error: err })
        }

        res.json(data)
    })

})

app.post('/register', (req, res) => {

    const { name } = req.body

    const query = `INSERT INTO users (??) VALUES (?)`
    const data = ['name', name]

    if(!name){
        return res.status(404).json({error: `Insira um nome ${name}`})
    }

    pool.query(query, data, err => {
        
        if(err){

            return res.status(404).json({error: err})

        }

        res.json({success: 'User registered'})

    })

})

app.listen(port, () => {
    console.log(`Running at port ${port}`)
})

