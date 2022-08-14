//import functions
const { getApiData, getApiDataByLimit } = require('./apiServices');

//jest.mock("./apiServices");

//use jest to test the functions
describe('API Service test', () => {
    test('getApiData should return a random cat fact', async () => {
        const result = await getApiData();
        expect(result.data.fact).toEqual(expect.any(String));
        expect(result.data.length).toEqual(expect.any(Number));
    });

    test('getApiDataByLimit should return a list of cat facts based on a limit', async () => {
        const result = await getApiDataByLimit();
        expect(result.data.length).toBeLessThan(1000);
    })

});

