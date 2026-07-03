import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {type: String, required: [true, 'user name is required']},
    email: {type: String, required: [true, 'email is required'], unique: true},
    password: {type: String, required: [true, 'password is required']},
    address: {type: Array},
    phone: {type: String, required: [true, 'phone number is required']},
    userType: {type: String, required: [true, 'user type is required'], default: 'client', enums: ['client', 'admin', 'vendor', 'driver']},
    profile: {type: String, default: 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png'},
    answer: {type: String, required: [true, 'Answer is required']}
}, {timestamp: true} );

const User = mongoose.model('User', userSchema);
export default User;