import mongoose, { Schema, Types, Document } from 'mongoose';

interface IReaction extends Document {
    _id: Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
}

const reactionSchema = new Schema<IReaction> ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});

export default reactionSchema;