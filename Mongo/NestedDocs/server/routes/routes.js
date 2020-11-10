const controller = require('../controllers/controller');
module.exports = app => {
    // C
    app.post('/api/restaurants', controller.newRestaurant);
    // R
    app.get('/api/restaurants', controller.allRestaurants);
    // U
    app.patch('/api/restaurants/:id/review', controller.newReview)
    app.patch('/api/restaurants/reviews/:revId/delete', controller.deleteReview);
    // D
}