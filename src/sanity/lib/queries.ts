import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0]`

export const roomsQuery = groq`*[_type == "room"]`

export const galleryQuery = groq`*[_type == "gallery"]`
