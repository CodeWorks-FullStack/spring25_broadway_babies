import { animalsService } from "../services/AnimalsService.js";
import BaseController from "../utils/BaseController.js";

// NOTE class name must match file name!
export class AnimalsController extends BaseController {
  constructor() {
    // NOTE check where postman is sending request to!
    super('api/animals')
    this.router
      .get('', this.getAllAnimals)
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
}