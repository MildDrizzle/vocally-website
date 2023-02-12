"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const FormRoute_1 = require("./routes/FormRoute");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb://localhost:27017/vocally")
    .then(() => {
    console.log("DB Connetion Successfull");
})
    .catch((err) => {
    console.log(err.message);
});
app.use("/api", FormRoute_1.formRoutes);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
