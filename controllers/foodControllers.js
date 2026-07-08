import Food from "../models/foodModel.js";
import Order from "../models/orderModel.js";

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

export const getFoodById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const food = await Food.findById(id);
        if(!food) {
            return res.status(404).json({
                success: false,
                message: 'food not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'food fetched successfully',
            food
        })
        
    } catch (error) {
        console.log('error in get food API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in get food API'
        })
    }
}

export const getFoodByResturant = async (req, res, next) => {
    try {
        const id = req.params.id;
        const food = await Food.find({resturant: id});
        if(!food) {
            return res.status(404).json({
                success: false,
                message: 'food based on resturant not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'food based on resturant fetched successfully',
            food
        })
        
    } catch (error) {
        console.log('error in get food API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in get food API'
        })
    }
}

export const updateFood = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, description, price, imageUrl, foodTags, category, code, isAvailable, resturant, rating, ratingCount } = req.body;

        const updatedFood = await Food.findByIdAndUpdate(id, { title, description, price, imageUrl, foodTags, category, code, isAvailable, resturant, rating, ratingCount }, {new: true, runValidators: true});
        
        if(!updatedFood) {
            return res.status(404).json({
                success: false,
                message: 'food not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'food updated successfully',
            updatedFood
        })
        
    } catch (error) {
        console.log('error in update food API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in update food API'
        })
    }
}

export const deleteFood = async (req, res, next) => {
    try {
        const id = req.params.id;

        const deletedFood = await Food.findByIdAndDelete(id);
        
        if(!deletedFood) {
            return res.status(404).json({
                success: false,
                message: 'food not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'food deleted successfully',
            deletedFood
        })
        
    } catch (error) {
    }
}

export const placeOrder = async (req, res, next) => {
    try {
        const userId = req.body.id;
        const {cart, payment} = req.body;
        if (!cart || cart.length === 0) {
            return res.status(400).json({            
                success: false,
                message: "Cart is empty"
            });
        }
        
        const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
        const foodIds = cart.map(item => item._id);
        
        const newOrder = new Order({food:foodIds, payment: total, buyer: userId});
        await newOrder.save();
        return res.status(200).json({
            success: true,
            message: 'order placed successfully',
            newOrder
        })
    } catch (error) {
        console.log('error in place order API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in place order API'
        })
    }
}

export const updateOrderStatus = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const { status } = req.body;
        if(!status) {
            return res.status(404).json({
                success: false,
                message: 'invalid status'
            })
        }

        const orderUpdate = await Order.findByIdAndUpdate(orderId, {status}, {new: true, runValidators: true});
        
        if(!orderUpdate) {
            return res.status(404).json({
                success: false,
                message: 'order not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'order status updated successfully',
            orderUpdate
        })
    } catch (error) {
        console.log('error in update order status API:', error);
        return res.status(500).json({
            success: false,
            message: 'error in update order status API'
        })
    }
}