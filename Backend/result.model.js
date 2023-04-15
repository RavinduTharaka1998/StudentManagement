const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Results = new Schema({
    year: {
        type: String
    },
    term: {
        type: String
    },
    grade: {
        type: String
    },
    subject: {
        type: String
    },
    marks: {
        type: String
    },
    campusid: {
        type: String
    }
}, {
    collation: 'Results'
});

module.exports = mongoose.model('Results',Results);