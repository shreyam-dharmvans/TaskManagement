import { model, Schema } from "mongoose";

export interface task {
    title: string;
    deadline: string;
    description: String;
    category: "To Do" | "In Progress" | "Done" | "Timeout";
}



const taskSchema = new Schema<task>({
    title: {
        type: String,
        required: true
    },
    description: { type: String },
    deadline: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["To Do", "In Progress", "Done", "Timeout"],
    }
});

export const Task = model<task>('Task', taskSchema);