import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import User from '../models/User.js';

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().populate('thoughts').populate('friends');
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
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
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (err) {
        res.status(500).json(err);
    }
};