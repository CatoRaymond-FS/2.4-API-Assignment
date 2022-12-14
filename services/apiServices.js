//use axios
const axios = require('axios');
require('dotenv').config();

//create a function to get a random cat fact from api
const getApiData = async () => {
    return await axios.get(process.env.apiURL);
}

//create a function to get a cat breed by name from api
const getApiDataByLimit = async (limit) => {
    return await axios.get(process.env.apiURL + limit);
}

//export functions
module.exports = {
    getApiData,
    getApiDataByLimit
  
}

