import { dbContext } from "../db/DbContext.js"

class AnimalsService {
  async getAllAnimals() {
    const animals = await dbContext.Animals.find()
    return animals
  }
}

export const animalsService = new AnimalsService()