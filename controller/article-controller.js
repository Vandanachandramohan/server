import Article from '../schema/articleSchema.js'



export const createArticle=async(req,res)=>{
 console.log(req.body); 
 try{
   const article= await new Article(req.body);
   article.save();
   res.status(200).json("blog svaed successfully")
 }  
 catch (error){
     res.status(500).json(error);
 }
}
export const getAllPosts = async(req,res)=>{
  let articles;
  let username =req.query.username;
  try{
    if(username)
     articles= await Post.find({username:username});
   else
      articles= await Article.find({});
      res.status(200).json(articles)

  }
  catch(error){
    res.status(500).json(error);
  }
}

export const getArticle=async(req,res)=>{
  try{
    let article=await Article.findById(req.params.id); 
     res.status(200).json(article);
  }
  catch(error){
    res.status(500).json(error);
  }
}

export const updatePost=async(req,res)=>{
  try{
    await Article.findByIdAndUpdate(req.params.id,{$set:req.body});
    res.status(200).res('Blog updated successfully');
  }
  catch(error){
res.status(500).json(error);
  }
}

export const deletePost=async(req,res)=>{
  try{
let article=await Article.findById(req.params.id);
 await article.delete();
res.status(200).res('Blog deleted successfully');
  }
  catch(error){
res.status(500).json(error);
  }
}




