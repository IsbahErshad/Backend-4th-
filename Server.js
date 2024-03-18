const express =require('express')
const cors=require('cors')
const app =express()
app.use (express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}...`)
})
// connection to mongo db

const mongoose=require('mongoose')
const DB='mongodb+srv://isbah:Ac1oMonDB@cluster0.vlq1aqo.mongodb.net/MyDb'
mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('Database connected..')
})
