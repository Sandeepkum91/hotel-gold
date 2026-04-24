export interface HeroData {
  title1?: string;
  title2?: string;
  subtitle?: string;
  backgroundImage?: any;
}

export interface RoomData {
  _id: string;
  name?: string;
  price?: string;
  image?: any;
  bed?: string;
  guests?: string;
  amenities?: string[];
}

export interface GalleryData {
  _id: string;
  image?: any;
  category?: string;
  title?: string;
  span?: string;
}
