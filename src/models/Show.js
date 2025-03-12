import { Schema } from "mongoose";

export const ShowSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 3, maxLength: 50 },
    handlerId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    animalId: { type: Schema.ObjectId, required: true, ref: 'Animal' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

ShowSchema.virtual('animal', {
  ref: 'Animal',
  localField: 'animalId',
  foreignField: '_id',
  justOne: true
})

ShowSchema.virtual('handler', {
  ref: 'Account',
  localField: 'handlerId',
  foreignField: '_id',
  justOne: true
})