"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formRoutes = void 0;
const express_1 = require("express");
const FormController_1 = require("../controllers/FormController");
exports.formRoutes = (0, express_1.Router)();
exports.formRoutes.post("/", FormController_1.newUser);
