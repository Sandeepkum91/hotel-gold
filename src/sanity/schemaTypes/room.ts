import { defineField, defineType } from 'sanity'

export const roomType = defineType({
  name: 'room',
  title: 'Rooms',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Room Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price per Night',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Room Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bed',
      title: 'Bed Type',
      type: 'string',
    }),
    defineField({
      name: 'guests',
      title: 'Guests Count',
      type: 'string',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
