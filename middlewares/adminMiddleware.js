import User from "../models/userModel.js";

export default async (req, res, next) => {
    try {
        const user = await User.findById(req.body.id);
        if(user.userType !== 'admin') {
            return res.status(401).json({
                success: false,
                message: 'only admin access'
            })
        }
        else next();
        
    } catch (error) {
        console.log('error in auth middleware:', error);
        res.status(500).json({
            success: false,
            message: 'error in auth middleware',
            error
        })
    }
}