//use express
const express = require('express');
//import api services
const { getRandomUser, getRandomUserByName } = require('../services/apiServices');

//create api router
const apiRouter = express.Router();

//create function to get random user
apiRouter.get('/', (req, res, next) => {
    getRandomUser().then(result => {
        res.status(200).json(result.data)
        }).catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                }
            });
    })
});

//create function to get random user by name
apiRouter.get('/:name', (req, res, next) => {
    getRandomUserByName(req.params.name).then(result => {
        res.status(200).json(result.data)
        }).catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                }
            });
    })
});

//export api router
module.exports = apiRouter;

