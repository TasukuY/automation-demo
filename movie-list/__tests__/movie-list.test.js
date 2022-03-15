const {addMovie} = require('../functions/addMovie');

//boilerplate code for .test.js file below
const {Builder, Capabilities} = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    //put the page address in .get('')
    await driver.get('http://127.0.0.1:5500/movie-list/index.html');
})

afterAll(async () => {
    await driver.quit();
})
//boilerplate code for .test.js file above

test('add a movie to the list', async () => {
    await addMovie(driver);

    await driver.sleep(5000);
})
