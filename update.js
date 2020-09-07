const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/cars');

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created:{
        type:Date,
        default:Date.now
    }
});

const Car = mongoose.model("Car",carSchema);

Car.update({year:1999},{year:2000},(err , cars)=>{
    if(!err){
        console.log('cars',cars)
    }
});