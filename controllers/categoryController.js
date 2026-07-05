import Category from "../models/categoryModel.js";

export const createCategory = async (req, res, next) => {
    try {
        const { title, imageUrl } = req.body;
        if(!title) {
            return res.status(500).json({
                success: false,
                message: 'title is required'
            })
        }
        const newCategory = new Category({title, imageUrl});
        await newCategory.save();
        return res.status(200).json({
            success: true,
            message: 'category created successfully',
            newCategory
        })
        
        
    } catch (error) {
        console.log('error in create category API:',error);
        res.status(500).json({
            success: false,
            message: 'error in create category API'
        })
    }
}

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = Category.find();
        return res.status(200).json({
            success: true,
            message: 'all category fetched successfully',
            categories
        })
        
    } catch (error) {
        console.log('error in get all category API:',error);
        res.status(500).json({
            success: false,
            message: 'error in get all category API'
        })
    }
}