import Resturant from "../models/resturantModel.js";

export const createResturant = async (req, res, next) => {
    try {
        const { title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, code, coords } = req.body;
        if(!title || !coords) {
            return res.status(500).json({
                success: false,
                message: "tile and coords are required"
            })
        }
        
        const newResturant = new Resturant({ title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, code, coords });
        await newResturant.save();
        return res.status(200).json({
            success: true,
            message: "resturant created successfully"
        })
        
    } catch (error) {
        console.log('error in create resturant API:', error)
        return res.status(500).json({
            success: false,
            message: "error in create resturant API"
        })
    }
    
}