import {Document} from 'mongoose'
import * as mongoose from 'mongoose'

export interface Book extends Document {
  
  readonly _id:  mongoose.Schema.Types.ObjectId, 
  readonly name: string,
  readonly author: Object,
  readonly language: String,
  readonly releaseYear: Number,
  readonly publichser: String,
  readonly pages: Number,

}