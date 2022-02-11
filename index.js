import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './database/db.js';
import path from 'path';

//import components
import Router from './routes/route.js';



const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



app.use(express.static('./build'));

connection();

app.use('/',Router);

app.get('/*', function(req, res) 
{
    res.sendFile(path.join(__dirname +'/build/index.html'));

});  


app.listen(5000, (req,res)=>{
    console.log("Server is running...")
})