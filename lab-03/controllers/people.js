const people = require('../models/people');

exports.index = async (req, res, next) => {
	try {
		const peoples = await people.findAll();
		res.status(200).json(peoples);
	} catch (error) {
		next(error);
	}	
}

exports.show = async (req, res, next) => {
	
    try {
        const peoples = await people.findById(req.params.id);
        res.status(200).json(peoples);
    } catch (error) {
        next(error);
    }
}
