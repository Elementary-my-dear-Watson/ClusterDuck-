import { ObjectId } from 'mongoose';
import db from '../config/connection.js';
import User from '../models/User.js';
import Thought from '../models/Thought.js';
import cleanTheDB from './cleanDB.js';
import { thoughtSeedData } from './thoughtSeedData.js';
import { userSeedData } from './userSeedData.js';

const seedDatabase = async () => {
    try {
        await db();
        await cleanTheDB();
        const users = await User.insertMany(userSeedData);
        for (const thought of thoughtSeedData) {
            const createdThought = await Thought.create ({...thought, reactions: []});
            const _id: ObjectId = createdThought._id as ObjectId;
            const user = users.find(({ username }) => username === thought.username);
            user?.thoughts.push(_id);
            await user?.save();
            for (const reaction of thought.reactions) {
                await Thought.findByIdAndUpdate(
                    _id,
                    { $push: { reactions: reaction } },
                    { new: true }
                );
            }
        }
        // const users = userSeedData.map((user) => {
        //     const userThoughts = thoughts
        //         .filter((thought) => thought.username === user.username)
        //         .map((thought) => thought._id);

        //     return {
        //         ...user,
        //         thoughts: userThoughts,
        //     };
        // });

        console.log('YAY! The seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error('Got some ERRORS with seeding the database:', err);
        process.exit(1);
    }
};

seedDatabase();