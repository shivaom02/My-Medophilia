const mongoose = require('mongoose');
const Patient = require('./Patient');

const prescriptionSchema = new mongoose.Schema({
    patient: Patient,
    date: {
        type: Date,
        required: true
    }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;