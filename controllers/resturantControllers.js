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

export const getAllResturants = async (req,res, next) => {
    try {
        const resturants = await Resturant.find();
        res.status(200).json({
            success: true,
            message: "All resturants fetched successfully",
            resturants
        })
    } catch (error) {
        console.log('error in get all resturants API:', error)
        return res.status(500).json({
            success: false,
            message: "error in get all resturants API"
        })
    }
}

export const getResturantById = async (req,res, next) => {
    try {
        const resturantId = req.params.id;
        const resturant = await Resturant.findById(resturantId);
        if(!resturant) {
            return res.status(404).json({
                success: false,
                message: "no resturant found"
            })
        }
        res.status(200).json({
            success: true,
            message: "resturant fetched successfully",
            resturant
        })
    } catch (error) {
        console.log('error in get resturant API:', error)
        return res.status(500).json({
            success: false,
            message: "error in get resturant API"
        })
    }
}

export const deleteResturant = async (req,res, next) => {
    try {
        const resturantId = req.params.id;
        await Resturant.findByIdAndDelete(resturantId);
        res.status(200).json({
            success: true,
            message: "resturant deleted successfully"
        })
    } catch (error) {
        console.log('error in delete resturant API:', error)
        return res.status(500).json({
            success: false,
            message: "error in delete resturant API"
        })
    }
}