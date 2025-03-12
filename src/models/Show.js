import { Schema } from "mongoose";

// REVIEW many-to-many relationship
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

// NOTE a schema can have as many virtuals as you need

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