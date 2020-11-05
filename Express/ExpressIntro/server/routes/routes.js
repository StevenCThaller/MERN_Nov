const controller = require('../controllers/controller');
module.exports = app => {
    // C -> post
    app.post('/', controller.fakeCreate);
    // R -> get
    app.get('/', controller.baseRoute);
    app.get('/api/name', controller.nameThing);
    app.get('/parameter/:name/:number', controller.routeParameterDemonstration);
    // U -> put/patch
    // put -> updates the entire object 
    // patch -> to update only the fields that change

    // D -> delete
}