import { Schema } from "mongoose";

export const AnimalSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 1, maxLength: 100 },
    emoji: { type: String, required: true, minLength: 1, maxLength: 25 },
    talent: { type: String, required: true, minLength: 1, maxLength: 100 }
  },
  {
    timestamps: true
  }
)