import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get ('/me',async(req,res)=>{
    try{
        const catResponse = await axios.get('https://catfact.ninja/fact');
        
        const response = {
            status:"success",
            user:{
                email:"uwajedavid04@gmail.com",
                name:"Uwaje David Onyekachi",
                stack:"Node.js/Express js"
            },
            timestamp: new Date().toISOString(), 
            fact: catResponse.data.fact    
        }
          res.status(200).json(response);
    }

catch(error){

     const fallbackResponse = {
      status: 'success',
      user: {
        email: 'uwajedavid04@gmail.com',
        name: 'Uwaje David Onyekachi',
        stack: 'Node.js/Express'
      },
      timestamp: new Date().toISOString(),
      fact: 'Could not fetch a cat fact at the moment. Try again later'
    };

    res.status(200).json(fallbackResponse);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/me`);
});