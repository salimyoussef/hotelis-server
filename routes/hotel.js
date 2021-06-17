const hotel = require('../models/hotel');

module.exports = (app) => {
    app.get('/search', (req, res) => {
        hotel.find().then((result) => {
            res.json(result);
        }).catch(err => {
            return next(err);
        });
    });
    
    app.get('/hotel/:id', (req, res, next) => {
        hotel.findById(req.params.id).then((result) => {
            if (result === null) {
                return res.status(404).send('Hotel not found');
            }
            else {
                return res.json(result);
            }
        }).catch(err => {
            return next(err);
        });
    });
}


