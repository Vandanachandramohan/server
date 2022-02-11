import mongoose from 'mongoose';

const connection=async()=>{
    try{
        const url='mongodb+srv://vandana:react123@cluster0.g6oeb.mongodb.net/myReactDB?retryWrites=true&w=majority';
        await mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true});
        console.log('DB connected successfully');
    }
    catch(error){
console.log('Error in connection to mongoDB',error)
    }
}

export default connection;

