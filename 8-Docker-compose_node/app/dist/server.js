"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = require("mysql");
const dotenv_1 = require("dotenv");
const body_parser_1 = require("body-parser");
const db_config_1 = __importDefault(require("./config/db.config"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.NODE_DOCKER_PORT || 3000;
const pool = (0, mysql_1.createPool)({
    connectionLimit: 10,
    host: db_config_1.default.HOST,
    user: db_config_1.default.USER,
    password: db_config_1.default.PASSWORD,
    database: db_config_1.default.DB
});
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    const query = `SELECT * FROM users`;
    pool.query(query, (err, data) => {
        if (err) {
            return res.status(404).json({ error: err });
        }
        res.json(data);
    });
});
app.post('/register', (req, res) => {
    const { name } = req.body;
    const query = `INSERT INTO users (??) VALUES (?)`;
    const data = ['name', name];
    if (!name) {
        return res.status(404).json({ error: `Insira um nome ${name}` });
    }
    pool.query(query, data, err => {
        if (err) {
            return res.status(404).json({ error: err });
        }
        res.json({ success: 'User registered' });
    });
});
app.get('/teste', (req, res) => {
    res.json({ teste: "testando" });
});
app.post('/create', (req, res) => {
    var sql = "CREATE TABLE users (name VARCHAR(255))";
    pool.query(sql, (err) => {
        if (err) {
            return res.status(404).json({ error: err });
        }
        res.json({ success: 'Table created' });
    });
});
app.listen(port, () => {
    console.log(`Running at port ${port}`);
});
