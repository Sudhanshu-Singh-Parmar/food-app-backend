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
        return res.status(500).json({
            success: true,
            message: 'user data fetch sucessfully',
            user
        })

    } catch (error) {
        console.log('error in getUser')
        return res.status(500).json({
            success: false,
            message: 'error in getUser'
        })
    }
}