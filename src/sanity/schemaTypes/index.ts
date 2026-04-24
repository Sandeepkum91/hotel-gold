import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import { roomType } from './room'
import { galleryType } from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, roomType, galleryType],
}
