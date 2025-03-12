import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class AnimalsService {
  async getAllAnimals() {
    const animals = await dbContext.Animals.find()
    return animals
  }

  async updateAnimal(animalId, updateData) {
    // BAD ❌
    // const animalToUpdate = await dbContext.Animals.findByIdAndUpdate(animalId, updateData)
    // GOOD ✅
    const animalToUpdate = await dbContext.Animals.findById(animalId)
    if (animalToUpdate == null) {
      throw new BadRequest(`Invalid animal id: ${animalId}`)
    }
    // NOTE we don't the client to be able to change the name of the animal
    // animalToUpdate.name = updateData.name
    animalToUpdate.talent = updateData.talent
    // NOTE after you change the values, make sure you update the database!
    await animalToUpdate.save()
    return animalToUpdate
  }
}

export const animalsService = new AnimalsService()