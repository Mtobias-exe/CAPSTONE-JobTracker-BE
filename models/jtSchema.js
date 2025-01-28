const mongoose = require("mongoose");

const jobDataModel = new mongoose.Schema({
    companyName:{
        type: String,
        required: true
    },
    
    jobTitle: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        required: true
    },
    
    status:{
        type: String,
        enum: ['pending', 'rejected', 'accepted'],
        required: true,

    },
    
    notes:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("JobData", jobDataModel);