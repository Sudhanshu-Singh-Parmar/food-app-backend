import mongoose from "mongoose";
import resturantRoutes from "../routes/resturantRoutes";

const foodSchema = mongoose.Schema({
    title: {type: String, required: [true, 'Food title is required']},
    description: {type: String, required: [true, 'Food description is required']},
    price: {type: Number, required: [true, 'Food price is required']},
    imageUrl: {type: String, default: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png'},
    foodTags: {type: String},
    category: {type: String},
    cdoe: {type: String},
    isAvailable: {type: Boolean, default: true},
    resturant: { trype: mongoose.Schema.Types.ObjectId, ref: "Resturant" },
    rating: {type: Number, min = 1, max = 5},
    ratingCount: {type: String},
    
}, {timestamp: true} );

const Foods = mongoose.model('Foods', foodSchema);
export default Foods;