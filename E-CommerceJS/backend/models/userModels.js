import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, required: true, index: true, unique: true
    },
    password: { type: String, required: true },
    isadmin: { type: Boolean, required: true, default: true },

})
const User = mongoose.model('User', userSchema);
export default User;
