import mongoose from "mongoose";

const resturantSchema = mongoose.Schema({
    title: {type: String, required: [true, 'Resturant title is required']},
    imageUrl: {type: String, default: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png'},
    foods: {type: Array},
    time: {type: String},
    pickup: {type: Boolean, default: true},
    delivery: {type: Boolean, default: true},
    isOpen: {type: Boolean, default: true},
    logoUrl: {type: String},
    rating: {type: Number, default: 1, min: 1, max: 5},
    ratingCount: {type: String},
    code: {type: String},
    coords: {
        id: String,
        latitude: Number,
        latitudeDelta: Number,
        longitude: Number,
        longitudeDelta: Number,
        address: String,
        title: String
    },
}, {timestamp: true} );

const Resturant = mongoose.model('Resturant', resturantSchema);
export default Resturant;