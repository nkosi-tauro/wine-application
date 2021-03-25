const mongoose = require('mongoose');
const Schema = mongoose.Schema


let wineSchema = new Schema({
    country:{
        type: String,
        required: true
    },
    region:{
        type: String,
        required: true
    },
    lage:{
        type: String,
        required: true
    },
    sweetness:{
        type: String,
        required: true
    },
    sugarlevel:{
        type: String,
        required: true
    },
    wineType:{
        type: String,
        required: true
    },
    wineColor:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    alcoholLevel:{
        type: String,
        required: true
    },
    vintage:{
        type: String,
        required: true
    },
    validEAN:{
        type: Boolean,
        required: true
    },
    acidity:{
        type: String,
        required: true
    },
    winery:{
        type: String,
        required: true
    },
    grape:{
        type: String,
        required: true
    },
    appellation:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Wine-Entity', wineSchema)
