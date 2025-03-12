import { dbContext } from "../db/DbContext.js"

class ShowsService {
  async getAllShows() {
    // NOTE when you call .populate, the first argument is the name of the virtual you want to run, and you can supply a second argument for properties you want to select
    // const shows = await dbContext.Shows.find().populate('animal').populate('handler', '-email -subs')
    // NOTE only selects the name and picture from the accounts collection
    const shows = await dbContext.Shows.find().populate('animal').populate('handler', 'name picture')
    return shows
  }

  async createShow(showData) {
    const show = await dbContext.Shows.create(showData)
    // NOTE you can only populate AFTER a create
    await show.populate('animal')
    await show.populate('handler', 'name picture')
    return show
  }

  async getShowsByAnimalId(animalId) {
    // NOTE we use our animalId for our filter object so we only get shows for a specific animal
    //                                       { animalId: '6615c244650db689bde4f58e' }
    const shows = await dbContext.Shows.find({ animalId: animalId }).populate('handler', 'name picture')
    return shows
  }
}

export const showsService = new ShowsService()