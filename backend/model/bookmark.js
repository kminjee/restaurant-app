import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookmarkSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
});

export default mongoose.model('Bookmark', BookmarkSchema);