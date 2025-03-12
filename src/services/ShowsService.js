import { dbContext } from "../db/DbContext.js"

class ShowsService {
  async getAllShows() {
    // const shows = await dbContext.Shows.find().populate('animal').populate('handler', '-email -subs')
    const shows = await dbContext.Shows.find().populate('animal').populate('handler', 'name picture')
    return shows
  }
  async createShow(showData) {
    const show = await dbContext.Shows.create(showData)
    // NOTE populate AFTER creates
    await show.populate('animal')
    await show.populate('handler', 'name picture')
    return show
  }
}

export const showsService = new ShowsService()