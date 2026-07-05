import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title: {type: String, required: [true, 'Category title is required']},
    imageUrl: {type: String, default: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png'},
}, {timestamp: true} );

const Category = mongoose.model('Category', categorySchema);
export default Category;