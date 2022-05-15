import mongoose from 'mongoose';
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    category: { type: String },
    name: { type: String },
    open: { type: String },
    close: { type: String },
    location: { type: String },
    phone: { type: String },
    menu: { type: String },
    star: { type: Number },
    image: { type: String }
});

export default mongoose.model('Restaurant', RestaurantSchema);
