import { NextFunction, Request, Response } from "express";
import { FormModel } from "../models/FormModel";

export const newUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email } = req.body;
    if (req.body.name && req.body.email) {
      const data = await FormModel.create({ name, email });
      if (data) {
        return res.json({
          status: true,
          msg: "Stored information in the database.",
        });
      }
    } else {
      return res.json({
        status: false,
        msg: "Name and Email both are required.",
      });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Something went wrong." });
  }
};
