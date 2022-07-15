import { userprofileService } from "../services/index.js";

// Get all users
const usersGET = async (req, res) => {
    try{
      const users = await userprofileService.getAllUsers();
      console.log(users);
  
      res.status(200).json({
        message: "ok",
        users,
      });
    }catch(err){
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  

// Get current logged in users
const currentUser = async (req, res) => {
    let email = req.query.email;
    try{
      const user = await userprofileService.getcurrentUser(email);
      console.log(user);
      res.status(200).json({
        status: true,
        user
      })
    }catch(err){
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  //Update profile details for current user
  const updatecurrentUser = async (req, res) => {
    let email = req.query.email;
    console.log(email)
    let firstname = req.body.firstname;
    try{
  
      const updateuser = await userprofileService.updatecurrentUser(email, firstname);
      const user = await userprofileService.getcurrentUser(email);
      res.status(200).json({
        status: true,
        user
      })
    }catch(err){
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  const uploadImage = async (req, res) => {
    let email = req.query.email;
    
    console.log(email)
    let firstname = req.body.firstname;
    try{

    }catch(err){
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };


// Post a new user
const postsUser = async (req,res) => {
    const user = req.body;
  
    console.log(user);
  
    try{
      const serviceResponse = await userprofileService.postUser(user);
  
      res.status(200).json({
        message: "ok",
      });
    }catch(err){
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  
  };
  
  export const userprofileController = {
    usersGET,
    postsUser,
    currentUser,
    updatecurrentUser,
    uploadImage
  };
  
  