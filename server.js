// Parameters
var sitePath = process.argv[2] || ".";


// Libraries
const express = require('express');
const http = require("http");
const mysql = require("mysql");

// modules
const app = express();
const path = require("path");
const compression = require("compression");
const dotenv = require("dotenv").config({path: "./.env"});
const bodyParser = require("body-parser");
const flash = require("express-flash");

// Configuration de notre session
const session = require("express-session")({
    secret: process.env.SESSION_KEY,
    name: process.env.SESSION_NAME,
    resave: true,
    saveUninitialized: true
});

// Configuration de la base de données
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

// Configuration du serveur
app.use(express.static(__dirname + '/' + sitePath));
app.use(compression());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session)
app.use(flash());
app.set("title", process.env.SERVER_NAME)
app.set("port", process.env.SERVER_PORT);
app.set("env", process.env.SERVER_ENV)
if(app.get("env") === "production"){
    app.set("trust proxy", 1);
}

// Variable globales
global.flash = flash;
global.pool = pool;

// Request logging
app.use(function (req, res, next) {
    console.log(req.url);
    next();
});

// Lancement du serveur
const server = http.createServer(app);
server.listen(app.get("port"), () => {
    process.stdout.write('\x1B[2J\x1B[0f');
    console.log("[INFO] Server " + app.get("title") + " started on port: " + app.get("port"));
    console.log("[INFO] Server environnement: " + app.get("env"));
    console.log("[INFO] Server view engine: " + app.get("view engine"));
    console.log("[INFO] Loading defaultDataSchema... done!");
    console.log("[INFO] Hooking into MySQL...");
    pool.getConnection((error, connection) => {
        if(error) throw error;
        connection.release();
        console.log("[INFO] Server is now connected to database");
    })
})