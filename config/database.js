const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/eventsDB',{useNewUrlParser: true}, (err)=>{
    
    if (err){
        console.log(err)
    }else {
        console.log('DB connected')
    }
})