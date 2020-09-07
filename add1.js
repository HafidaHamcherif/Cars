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

const renault = new Car({
    brand: "Renault",
    model: "Espace",
    year: 1999,
});

const scenic = new Car({
    brand: "Renault",
    model: "scenic",
    year: 2004,
});

const peugeot = new Car({
    brand: "Peugeot",
    model: "308",
    year: 2017,
});

renault.save((err, car)=>{
    console.log('err',err)
    console.log('car',car)
});

scenic.save((err, car)=>{
    console.log('err',err)
    console.log('car',car)
});

peugeot.save((err, car)=>{
    console.log('err',err)
    console.log('car',car)
});

setTimeout(() => {
    mongoose.connection.close();
}, 5000);