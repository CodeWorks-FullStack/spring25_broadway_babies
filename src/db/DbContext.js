import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { AnimalSchema } from '../models/Animal.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Animals = mongoose.model('Animal', AnimalSchema);
}

export const dbContext = new DbContext()
