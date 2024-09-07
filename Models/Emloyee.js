const mongoose=require("mongoose")

const EmployeeScema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name be must required"]
    },
    lastname:{
        type:String,
        required:[true,"lastname be must required"]
    },
    phonenumber:{
        type:Number,
        required:[true,"phonenumber be must required"]
    },
    emailaddress:{
        type:String,
        required:[true,"emailaddress be must required"]
    },
    joindate:{
        type:String,
        required:[true,"joindate be must required"]
    },
    gander:{
        type:String,
        required:[true,"gander be must required"]
    },
    designation:{
        type:String,
        required:[true,"designation be must required"]
    }

})

const Employee=new mongoose.model("Emloyee",EmployeeScema);
module.exports=Employee;