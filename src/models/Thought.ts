import mongoose, { Schema, Types, Document } from 'mongoose';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: mongoose.Types.Array<any>;
    reationCount: number;
}

const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        minlength:1,
        maxlenght:280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reaction',
    }],
})

thoughtSchema.virtual('reationCount').get(function(this: IThought) {
    return this.reactions.length;
})

const Thought = mongoose.model<IThought>('Thought', thoughtSchema);

export default Thought;
