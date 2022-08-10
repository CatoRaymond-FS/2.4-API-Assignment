//use axios
const axios = require('axios');
require('dotenv').config();

//create function to get random user
const getRandomUser = async () => {
    console.log("getRandomUser");
    return await axios.get(`$process.env.apiURL`);
};

//create function to get random user by name
const getRandomUserByName = async (name) => {
    console.log("getRandomUserByName");
    return await axios.get(`$process.env.apiURL`);
};

//export functions
module.exports = { getRandomUser, getRandomUserByName};