const mongoose = require('mongoose');

const connectToDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017');
        console.log("mongodb is connect successfully");
    }catch(e)
    {
        console.log('Mongodb connection failed',error);
        process.exit(1)
        
    }
};
module.exports = connectToDB;