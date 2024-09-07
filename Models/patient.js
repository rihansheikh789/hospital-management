const mongoose = require('mongoose');

// Define the Patient schema
const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name be must required"]
    },
    aadharcard:{
        type:String,
        required:[true,"aadharcard be must required"]
    },
    joindate:{
        type:String,
        required:[true,"joindate be must required"]
    },
    phonenumber:{
        type:String,
        required:[true,"phonenumber be must required"]
    },
    admitdate:{
        type:String,
        required:[true,"admitdate be must required"]
    },
    gander:{
        type:String,
        required:[true,"gander be must required"]
    },
    age:{
        type:String,
        required:[true,"problem be must required"]
    },
    adress:{
        type:String,
        required:[true,"problem be must required"]
    }
});

// Create the Patient model
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
