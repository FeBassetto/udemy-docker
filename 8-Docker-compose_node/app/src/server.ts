import express, { Express } from "express";
import { createPool } from 'mysql';
import { config } from "dotenv";
import { json, urlencoded } from "body-parser";

import dbConfig from "./config/db.config";

config();
const app: Express = express();
const port = process.env.NODE_DOCKER_PORT || 3000;

const pool = createPool({
    connectionLimit: 10,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(express.json())

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

    if (!name) {
        return res.status(404).json({ error: `Insira um nome ${name}` })
    }

    pool.query(query, data, err => {

        if (err) {

            return res.status(404).json({ error: err })

        }

        res.json({ success: 'User registered' })

    })

})

app.get('/teste', (req, res) => {

    res.json({ teste: "testando" })

})

app.post('/create', (req, res) => {

    var sql = "CREATE TABLE users (name VARCHAR(255))";

    pool.query(sql, (err) => {

        if (err) {

            return res.status(404).json({ error: err })

        }

        res.json({ success: 'Table created' })

    })

})

app.listen(port, () => {
    console.log(`Running at port ${port}`)
})



