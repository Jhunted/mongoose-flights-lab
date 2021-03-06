const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United']}, 
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    }, 
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const updatedYear = date.getFullYear() + 1;
            date.setFullYear(updatedYear);
            return date;
    }      
}
}, {timestamps: true});

module.exports = mongoose.model('Flight', flightSchema);

