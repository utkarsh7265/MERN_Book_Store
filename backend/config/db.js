const mongoose = require('mongoose');
mongoose.set("strictQuery",true,"useNewUrlParser",true);

const connectDB = async () => {     
    console.log(process.env.DB_STRING);
    try {
        await mongoose.connect(process.env.DB_STRING);
        console.log("DB connected");
    } catch (error) {   
        console.error(error);       
        process.exit(1);        
    }
}

module.exports = connectDB;
