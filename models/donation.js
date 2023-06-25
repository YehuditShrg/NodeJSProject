const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    ID:{
        type: Number,
        required: true,
        unique : true
    }, 
    amount:{
        type: Number
    }, 
    fundRaiserID: {
        type: Number
    }, 
    date:{
        type: Date
    },
    donor:{
        type: String
    }
        
})
const Donation = new mongoose.model('Donations', donationSchema);

module.exports = { Donation };