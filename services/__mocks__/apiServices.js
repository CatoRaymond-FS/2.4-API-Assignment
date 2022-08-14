//use axios


//create a function to get a random cat fact from api
const getApiData =  () => {
    return Promise.resolve({
        data:[{
            fact: "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white.",
            length: 315
        }, {
            fact: "Siamese cats are the most popular breed of cat. They are known for their large, compact bodies, and for their ability to climb very steep hills. Siamese cats are also known for their large eyes and for their ability to see in the dark.",
            length: 400
        }]
    })
}

//create a function to get a list of cat facts by limiting the number of results
const getApiDataByLimit = async (limit) => {
    return Promise.resolve({
        data:[{
            fact: "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white.",
            length: 315
        }, {
            fact: "Siamese cats are the most popular breed of cat. They are known for their large, compact bodies, and for their ability to climb very steep hills. Siamese cats are also known for their large eyes and for their ability to see in the dark.",
            length: 400
        }]
    })
}

//export functions
module.exports = {
    getApiData,
    getApiDataByLimit
  
}

