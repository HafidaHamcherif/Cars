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

//tout les cars
// Car.find({},(err, cars)=>{
//     if(!err){
//         console.log('cars',cars)
//     }
// });


//select 1cars 
// Car.find({model: "Espace"},(err, cars)=>{
//     if(!err){
//         console.log('cars',cars)
//     }
// });

//select 1cars findById
Car.findById("5f523de720ccb20a485e3551",(err, cars)=>{
    if(!err){
        console.log('cars',cars)
    }
});

