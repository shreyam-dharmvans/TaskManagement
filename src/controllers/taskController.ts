import { Task } from "../models/taskSchema.js"
import { Request, Response } from "express";

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const allTasks = await Task.find({});
        return res.status(200).json({ message: "OK", allTasks });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: "ERROR", cause: err });
    }
}

export const getSingleTask = async (req: Request, res: Response) => {
    try {
        let id: string = req.params.id;
        const singleTask = await Task.findById(id);
        return res.status(200).json({ message: "OK", singleTask });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: "ERROR", cause: err });
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();

        return res.status(200).json({ message: "OK" });
    }
    catch (err) {
        return res.status(400).json({ message: "ERROR", cause: err });
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        let id: string = req.params.id;
        await Task.findByIdAndUpdate(id, { ...req.body });

        return res.status(200).json({ message: "OK" });
    }
    catch (err) {
        return res.status(400).json({ message: "ERROR", cause: err });
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        let id: string = req.params.id;

        await Task.findByIdAndDelete(id);

        return res.status(200).json({ message: "OK" });
    } catch (err) {
        return res.status(400).json({ message: "ERROR", cause: err });
    }

}
