import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRouter from "./routes/taskRoute.js";
if (process.env.NODE_ENV != "production") {
    dotenv.config();
}
//db connect
main()
    .then(() => {
    console.log("connected to database");
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
}
const app = express();
app.use(express.json());
var whitelist = ['http://localhost:5173'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));
app.use("/", taskRouter);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("server is listening at port 8080");
});
