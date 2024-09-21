const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")

dotenv.config()
app.use(express.json())

if(process.env.NODE_ENV === "localhost"){
    app.use(cors({
        origin: "http://localhost:5173",
        credentials: true
    }))
}else{
    app.use(cors({
        credentials: true
    }))
}

app.use("/api",require("./routes/authRoutes"))

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"./frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"./","frontend","dist","index.html"))
    })
}

const connectDB = async()=>{
        try{
            if(process.env.NODE_ENV === "localhost"){
                await mongoose.connect(process.env.LOCAL_MONGODB_URL)
                console.log("local database is connected");
            }else{
                await mongoose.connect(process.env.PRODUCTION_MONGODB_URL)
                console.log("Production database is connected");
            }
        }catch(error){
            console.log("Database connection failed");
            
        }
}

connectDB()

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
