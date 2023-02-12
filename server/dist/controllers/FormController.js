"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const FormModel_1 = require("../models/FormModel");
const newUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        if (req.body.name && req.body.email) {
            const data = yield FormModel_1.FormModel.create({ name, email });
            if (data) {
                return res.json({
                    status: true,
                    msg: "Stored information in the database.",
                });
            }
        }
        else {
            return res.json({
                status: false,
                msg: "Name and Email both are required.",
            });
        }
    }
    catch (err) {
        return res.json({ status: false, msg: "Something went wrong." });
    }
});
exports.newUser = newUser;
