import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    food: [ {type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true} ],
    payment: {type: Number, required: true},
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ['preparing', 'prepared', 'on the way', 'delivered'], default: 'preparing' },

}, {timestamps: true} );

const Order = mongoose.model('Order', orderSchema);
export default Order;