const mongoose = require("mongoose");


// const DB = "mongodb+srv://ayush:janemann01@cluster0.pqwfr2x.mongodb.net/mernstack?retryWrites=true&w=majority";

const DB = "mongodb://ayush:janemann01@ac-y4aqoaj-shard-00-00.pqwfr2x.mongodb.net:27017,ac-y4aqoaj-shard-00-01.pqwfr2x.mongodb.net:27017,ac-y4aqoaj-shard-00-02.pqwfr2x.mongodb.net:27017/?ssl=true&replicaSet=atlas-9po0o3-shard-0&authSource=admin&retryWrites=true&w=majority"



mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("connection start")).catch((error)=>console.log(error.message))