import { dbContext } from "../db/DbContext.js"

class AnimalsService {
  async getAllAnimals() {
    const animals = await dbContext.Animals.find()
    return animals
  }
  async updateAnimal(animalId, updateData) {
    // BAD
    // const animalToUpdate = await dbContext.Animals.findByIdAndUpdate(animalId, updateData)
    // GOOD
    const animalToUpdate = await dbContext.Animals.findById(animalId)
    // animalToUpdate.name = updateData.name you can no longer change the name!
    animalToUpdate.talent = updateData.talent
    // NOTE after you change the values, make sure you update the database!
    await animalToUpdate.save()
    return animalToUpdate
  }
}

export const animalsService = new AnimalsService()