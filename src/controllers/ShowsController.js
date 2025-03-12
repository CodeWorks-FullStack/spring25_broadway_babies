import { showsService } from "../services/ShowsService.js";
import BaseController from "../utils/BaseController.js";

export class ShowsController extends BaseController {
  constructor() {
    super('api/shows')
    this.router
      .get('', this.getAllShows)
  }

  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAllShows(request, response, next) {
    try {
      const shows = await showsService.getAllShows()
      response.send(shows)
    } catch (error) {
      next(error)
    }
  }
}