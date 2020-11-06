const controller = require('../controllers/controller');
module.exports = app => {
    // C -> post
    app.post('/', controller.fakeCreate);

    app.post('/api/stress', controller.createStress);
    // R -> get
    app.get('/', controller.baseRoute);
    app.get('/api/name', controller.nameThing);
    app.get('/parameter/:name/:number', controller.routeParameterDemonstration);

    app.get('/api/stress', controller.getStresses);

    // U -> put/patch
    // put -> updates the entire object 
    // patch -> to update only the fields that change

    // D -> delete
}