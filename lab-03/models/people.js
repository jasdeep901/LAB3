let data = require('./persondata.json');

exports.findAll = () => {

    return data;
};

exports.findById = (id) => {
    for (let x of data) {
        if (x.id === Number(id)) return x;
    }
    
    throw new Error(`Error : Id not found`);
};
