import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const registerController = async (req, res, next) => {
    const { userName, email, password, address, phone, userType, profile } = req.body;
    if(!userName || !email || !password || !phone) {
        res.status(400).json({
            success: false,
            message: 'Please provide all fields',
        })
    }
    
    // check is this email already registered
    const existingUser = await User.findOne({email: email});
    if(existingUser) {
        res.status(400).json({
            success: false,
            message: 'email already registered',
        })    
    }

    // create new user
    // 1st hash the password -:
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ userName, email, password: hashedPassword, address, phone, userType, profile });
    
    user.save()
    .then( () => {
        console.log('user created successfully');
        res.status(201).json({
            success: true,
            message: 'user created successfully',
            data: user
        })
    })
    .catch( err => {
        console.log('error while creating user');
        res.status(500).json({
            success: false,
            message: 'error while creating user',
            err
        })
    });
}

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'please provide email and password',
            })
        }
        
        // now check is this email registered -:
        const user  = await User.findOne({email})
        if(!user) {
            return res.status(400).json({
                success: false,
                message: 'invalid email or password',
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'invalid email or password',
            })    
        }
        
        // now crete token -:
        const token = JWT.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        user.password = undefined;  // we will not send user password due to account security reasons
        return res.status(200).json({
            success: true,
            message: 'login successful',
            token,
            user
        })
    } catch (error) {
        console.log('error in login API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in login API',
        })
    }
}


