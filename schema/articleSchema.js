import mongoose from 'mongoose';

const articlesSchema= mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
         type:String,
         required:true
    },
    image:{
        type:String,
        required:false
   },
   username:{
    type:String,
    required:true
   },
    createdDate:{
       type:Date
    
 }
})

 const article=mongoose.model('article',articlesSchema)
 export default article;

