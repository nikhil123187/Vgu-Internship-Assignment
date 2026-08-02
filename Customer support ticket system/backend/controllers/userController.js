const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req,res)=>{
        console.log(req.body);

    try{

        const {name,email,phone,password,role}=req.body;

        const userExists=await User.findOne({email});

        if(userExists){

            return res.status(400).json({
                message:"User Already Exists"
            });

        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=await User.create({

            name,
            email,
            phone,
            password:hashedPassword,
            role

        });

        res.status(201).json({

            message:"Registration Successful",
            user

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};


const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect Password"
            });
        }

        res.status(200).json({
            message: "Login Successful",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = { registerUser, loginUser };
