import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongoDB.js'


//initialize express
const app = express() 
connectDB()


//middleware
app.use(cors())

//routes
app.get('/',(req,res) => res.send("API working"))

//port
const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
