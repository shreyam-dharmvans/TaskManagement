import { model, Schema } from "mongoose";
const taskSchema = new Schema({
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
export const Task = model('Task', taskSchema);
