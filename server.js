const express=require("express");
const app=express();
app.use(express.json());
const mongoose=require("mongoose");
const PORT=3000;


app.get("/",(req,res)=>{
    res.send("Hello dude")
});


const restaurantSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
});
const restaurant=mongoose.model('restaurant',restaurantSchema);

const menuSchema=({
    ID:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:'dish'
    }],
    DishName:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true,
    },
});

const menu=mongoose.model('menu',menuSchema);

module.exports={restaurant,menu}

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})