const mongoose =require('mongoose')
const PhoneBookSchema= new mongoose.Schema({
    name:{
        type:String,
    required:true
},
Phone:{
    type:Number,
    required:true

}
})
const PhoneBook= mongoose.model('PhoneBook',PhoneBookSchema)
module.exports=PhoneBook
 
    const PhoneBook=require('./model/PhoneBook.js')
    app.post('/add-phone',async(req,res)=>{
        const phoneNumber= new PhoneBook(req.body)
        try{
            await phoneNumber.save()
            res.status(201).json({
                status:'success',
                headers:{
                    'Authorization':'',
                    'Content-Type':'',
                },
                data:{phoneNumber}
                })
            }catch(err){
                res.status(500).json({status:'Failed',message:err})
            }
        })
