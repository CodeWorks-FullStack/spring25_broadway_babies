import { dbContext } from "../db/DbContext.js"

class ShowsService {
  async getAllShows() {
    // const shows = await dbContext.Shows.find().populate('animal').populate('handler', '-email -subs')
    const shows = await dbContext.Shows.find().populate('animal').populate('handler', 'name picture')
    return shows
  }
}

export const showsService = new ShowsService()