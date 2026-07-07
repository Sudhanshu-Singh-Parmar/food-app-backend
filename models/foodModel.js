import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    title: {type: String, required: [true, 'Food title is required']},
    description: {type: String, required: [true, 'Food description is required']},
    price: {type: Number, required: [true, 'Food price is required']},
    imageUrl: {type: String, default: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png'},
    foodTags: {type: String},
    category: {type: String},
    code: {type: String},
    isAvailable: {type: Boolean, default: true},
    resturant: { type: mongoose.Schema.Types.ObjectId, ref: "Resturant" },
    rating: {type: Number, min: 1, max: 5},
    ratingCount: {type: String},
    
}, {timestamps: true} );

const Food = mongoose.model('Food', foodSchema);
export default Food;