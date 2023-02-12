import mongoose, { Schema } from "mongoose";

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const FormModel = mongoose.model("Form", FormSchema);
