const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://user123:password123Tech@cluster0.yf5hys8.mongodb.net/react-login-tut?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection