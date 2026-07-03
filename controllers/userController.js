import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'

export const getUser = async (req, res, next) => {
    try {
        const userId = req.body.id;
        const user = await User.findOne({_id: userId});
        if(!user) {
            console.log('user does not exists');
            return res.status(500).json({
                success: false,
                message: 'user does not exists'
            })
        }
        console.log('user data fetch sucessfully');
        user.password = undefined;
        return res.status(200).json({
            success: true,
            message: 'user data fetch sucessfully',
            user
        })
        
    } catch (error) {
        console.log('error in getUser')
        return res.status(500).json({
            success: false,
            message: 'error in getUser',
            error
        })
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const userId = req.body.id;
        
        // now update
        const { userName, phone, address } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, {userName, phone, address}, {new: true, runValidators: true});

        if(!updatedUser) {
            console.log('user not found, most probably user got deleted just before sending updatedUser data:', error)
            return res.status(500).json({
                success: false,
                message: 'user not found',
            })
        }
        
        updatedUser.password = undefined
        return res.status(200).json({
            success: true,
            message: 'user updated sucessfully',
            updatedUser
        })
    } catch (error) {
        console.log('error in updateUser Route', error)
        return res.status(500).json({
            success: false,
            message: 'error in updateUser Route',
        })
        
    }
}

export const resetPassword = async (req, res, next) => {
    try {
        const { id, email, answer, newPassword } = req.body;
        if(!email || !answer || !newPassword) {
            console.log("please provide all fields");
            return res.status(500).json({
                success: false,
                message: "please provide all fields"
            })
        }
        const user = await User.findOne({_id: id, email, answer});
        if(!user) {
            return res.status(500).json({
                success: false,
                message: "Invalid email/answer"
            })
        }
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        user.password = hashedPassword;
        await user.save();
        console.log('password reset successfully');
        res.status(200).json({
            success: true,
            message: "password reset successfully"
        })
    } catch (error) {
        console.log('error in resetPassword:',error);
        res.status(500).json({
            success: false,
            message: "error in resetPassword"
        })
    }
}