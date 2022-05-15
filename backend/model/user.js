import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate : [
            function(password) {
                return password.length >= 8;
            }, 
            'Password should be longer'
        ]
    }
});

export default mongoose.model('User', UserSchema);