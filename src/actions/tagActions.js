import {TagModel} from '../database/models'

export const createTag = async (tagData) => {
    try {
        return await TagModel.create(tagData)
    } catch (error) {
        return null;
    }
}


export const getTags = async () => {
    try {
      return await TagModel.find();
    } catch (error) {
      return null;
    }
}