import { Request, Response } from 'express';
import User from '../models/User.js';
import Thought from '../models/Thought.js';

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find().populate('thoughts').populate('friends');
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
};

// 

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await User.findOne({ _id: req.params.userId });
  
      if (!user) {
        res.status(404).json({ message: "No user with that ID" });
        return; // Ensure function exits after sending the response
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            res.status(404).json({ message: 'There is NO USER found with this id!' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        await Thought.deleteMany({ username: user.username });
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const addFriend = async (req: Request, res: Response) => {
    try {

        // const testUser = await User.findOne({ _id: req.params.userId })
        // console.log(testUser);

        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )//.populate('friends');


        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        await user.populate('friends');

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};


export const removeFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        ).populate('friends');

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};