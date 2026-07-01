import User from "../models/userModel.js";

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
    const user = new User({ userName, email, password, address, phone, userType, profile });
    
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