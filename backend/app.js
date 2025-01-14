const express = require('express');
const seedRoutes = require('./routes/seed');
const transactionRoutes = require('./routes/transactions');
const statsRoutes = require('./routes/stats');
const combinedRoutes = require('./routes/combined');
const barchartRoutes = require('./routes/BarChart');
const piechartRoutes=require('./routes/pieChart'); 

const cors=require('cors');

require('dotenv').config();

const app = express();



app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,
}))

app.get('/',(req,res)=>{
  console.log("CORS enabled")
})

app.use(express.json());

app.use('/api/seed', seedRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/combined', combinedRoutes);
app.use('/api/barChart', barchartRoutes);
 app.use('/api/pieChart',piechartRoutes);


module.exports = app;
