//add express to the project
const express = require('express');
const apiRouter = require('../router/apiRouter');



//create request listener
const app = express();
app.get('/', (req, res) => {
    res.status(200).json({message:'Service is up and running'});
});

//router middleware
app.use("/api",apiRouter)


//add middleware to handle errors and bad url
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method:req.method,
        }
    });
});

//export the app
module.exports = app;
