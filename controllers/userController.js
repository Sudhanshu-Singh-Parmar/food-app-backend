import User from "../models/userModel.js";

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