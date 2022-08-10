//create an http server
const http = require('http');
const app = require('./app/app');
require("dotenv").config();

http.createServer(app).listen(process.env.port, () => {
    console.log(`Server started on port ${process.env.port}`);
});