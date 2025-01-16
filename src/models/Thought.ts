import mongoose, { Schema, Document } from 'mongoose';
import reactionSchema from './Reaction.js';

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
    reactions:[reactionSchema],
})

thoughtSchema.virtual('reationCount').get(function(this: IThought) {
    return this.reactions.length;
})

const Thought = mongoose.model<IThought>('Thought', thoughtSchema);

export {IThought};
export default Thought;
