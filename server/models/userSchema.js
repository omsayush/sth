const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    // changes made shirt
    shirtlength: {
        type: String,
        required: false
    },
    shirtshoulder: {
        type: String,
        required: false
    },
    shirtsleeve: {
        type: String,
        required: false
    },
    shirtwaist: {
        type: String,
        required: false
    },
    shirtneck: {
        type: String,
        required: false
    },
    shirtculfcircum: {
        type: String,
        required: false
    },
    shirthalfsleeve: {
        type: String,
        required: false
    },
    shirtsleevecircum: {
        type: String,
        required: false
    },

    // changes made
    pantdesc: {
        type: String,
        required: false
    },
    pantl: {
        type: String,
        required: false
    },
    pantw: {
        type: String,
        required: false
    },
    panth: {
        type: String,
        required: false
    },
    pantcircum: {
        type: String,
        required: false
    },
    pantfly: {
        type: String,
        required: false
    },
    pantth: {
        type: String,
        required: false
    },
    pantkn: {
        type: String,
        required: false
    },
    // changes made Kurta
    kdesc: {
        type: String,
        required: false
    },
    klength: {
        type: String,
        required: false
    },
    kshoulder: {
        type: String,
        required: false
    },
    ksleeve: {
        type: String,
        required: false
    },
    khalf: {
        type: String,
        required: false
    },
    kchest: {
        type: String,
        required: false
    },
    kwaist: {
        type: String,
        required: false
    },
    kneck: {
        type: String,
        required: false
    },
    kcircum: {
        type: String,
        required: false
    },
    khalfcircum: {
        type: String,
        required: false
    },
    ksedgel: {
        type: String,
        required: false
    },
    ksarmol: {
        type: String,
        required: false
    },
    kschest: {
        type: String,
        required: false
    },
    kswaist: {
        type: String,
        required: false
    },
    kscircum: {
        type: String,
        required: false
    },
    ksedge: {
        type: String,
        required: false
    },
    sadridesc: {
        type: String,
        required: false
    },
    sadrilength: {
        type: String,
        required: false
    },
    sadricross: {
        type: String,
        required: false
    },
    sadriback: {
        type: String,
        required: false
    },
    sadrichest: {
        type: String,
        required: false
    },
    sadriwaist: {
        type: String,
        required: false
    },
    sadrineck: {
        type: String,
        required: false
    },
    sadrihib: {
        type: String,
        required: false
    },
    sadrisfc: {
        type: String,
        required: false
    },
    sadrisfw: {
        type: String,
        required: false
    },
    sadrisfe: {
        type: String,
        required: false
    },
    sadrisbc: {
        type: String,
        required: false
    },
    sadrisbw: {
        type: String,
        required: false
    },
    sadrisbe: {
        type: String,
        required: false
    },
    pyjdesc: {
        type: String,
        required: false
    },
    pyjlength: {
        type: String,
        required: false
    },
    pyjedgecir: {
        type: String,
        required: false
    },
    pyjhalfcirc: {
        type: String,
        required: false
    },
    pyjfly: {
        type: String,
        required: false
    },
    pyjchuridesc: {
        type: String,
        required: false
    },
    pyjchurihalflength: {
        type: String,
        required: false
    },
    pyjchurilength: {
        type: String,
        required: false
    },
    pyjchuriknee: {
        type: String,
        required: false
    },
    pyjchuriheel: {
        type: String,
        required: false
    },
    pyjchuricircum: {
        type: String,
        required: false
    },
    pyjchurifly: {
        type: String,
        required: false
    },
    pyjchruihalfcircle: {
        type: String,
        required: false
    },
    coatdesc: {
        type: String,
        required: false
    },
    coatlength: {
        type: String,
        required: false
    },
    coatcross: {
        type: String,
        required: false
    },
    coatback: {
        type: String,
        required: false
    },
    coatshoulder: {
        type: String,
        required: false
    },
    coatchest: {
        type: String,
        required: false
    },
    coatwaist: {
        type: String,
        required: false
    },
    coatneck: {
        type: String,
        required: false
    },
    coathandcircum: {
        type: String,
        required: false
    },
    coatfrontchest: {
        type: String,
        required: false
    },
    coatfrontwaist: {
        type: String,
        required: false
    },
    coatfrontedge: {
        type: String,
        required: false
    },
    coatbackchest: {
        type: String,
        required: false
    },
    coatbackwaist: {
        type: String,
        required: false
    },
    coatbackedge: {
        type: String,
        required: false
    },

});

const users = new mongoose.model("users", userSchema);

module.exports = users;