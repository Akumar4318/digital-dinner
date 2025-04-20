
const express=require('express')
const app=express();
const cors=require('cors')
const connectDB = require('./Database/mongodb');
require('dotenv').config();
const PORT=process.env.PORT || 4000
const itemRoutes=require('./Routes/ItemRoute')
const categoryRoutes=require('./Routes/categoryRoutes')

const orderRoutes = require('./Routes/orderRoutes');
const sequelize = require('./Database/postgreSQL');

const bodyParser = require('body-parser');
app.use(express.json())
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", 
      "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com;"
    );
    next();
  });
app.use(bodyParser.json());
app.use('/api/v1',itemRoutes)
app.use('/api/v1',categoryRoutes)
app.use('/api/v1',orderRoutes)



connectDB()
.then(()=>{
    console.log("db is connected")

    app.listen(PORT,()=>{

        console.log(`SERVER IS RUNNING AT PORT NO.${PORT}`)
    })
})


app.get('/',(req,res)=>{

    res.send('your server is created ')
})