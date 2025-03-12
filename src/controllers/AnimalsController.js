import { animalsService } from "../services/AnimalsService.js";
import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";

// NOTE class name must match file name!
export class AnimalsController extends BaseController {
  constructor() {
    // NOTE check where postman is sending the request to!
    super('api/animals')
    this.router
      .get('', this.getAllAnimals)
      .put('/:animalId', this.updateAnimal)
      // request URL --> api/animals/6615c24419fb342a28d6bd45/shows
      .get('/:animalId/shows', this.getShowsByAnimalId)
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAllAnimals(request, response, next) {
    try {
      const animals = await animalsService.getAllAnimals()
      response.send(animals)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async updateAnimal(request, response, next) {
    try {
      const animalId = request.params.animalId // which animal I want to update
      const animalUpdateData = request.body // what I want to update about the animal
      const animal = await animalsService.updateAnimal(animalId, animalUpdateData)
      response.send(animal)
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getShowsByAnimalId(request, response, next) {
    try {
      const animalId = request.params.animalId
      // NOTE use the service that interacts with that specific collection in the database
      const shows = await showsService.getShowsByAnimalId(animalId)
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }
}