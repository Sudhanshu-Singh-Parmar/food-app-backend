import Food from "../models/foodModel.js";

export const createFood = async (req, res, next) => {
    try {
        const { title, description, price, imageUrl, foodTags, category, code, isAvailable, resturant, rating, ratingCount } = req.body;
        if(!title || !description || !price || !resturant) {
            return res.status(404).json({
                success: false,
                message: 'please provide all required fields'
            })
        }
        const newFood = new Food({ title, description, price, imageUrl, foodTags, category, code, isAvailable, resturant, rating, ratingCount });
        await newFood.save();
        return res.status(200).json({
            success: true,
            message: 'food creation done'
        })
    } catch (error) {
        console.log('error in create foood API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in create foood API'
        })
    }
}

export const getAllFoods = async (req, res, next) => {
    try {
        const allFoods = await Food.find();
        return res.status(200).json({
            success: true,
            message: 'all foods fetched successfully',
            allFoods
        })
        
    } catch (error) {
        console.log('error in get all foods API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in get all foods API'
        })
    }
}