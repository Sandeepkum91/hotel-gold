import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Dining from "@/components/sections/Dining";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";

import { client } from "@/sanity/lib/client";
import { heroQuery, roomsQuery, galleryQuery } from "@/sanity/lib/queries";

export default async function Home() {
  let heroData = null;
  let roomsData = [];
  let galleryData = [];

  try {
    [heroData, roomsData, galleryData] = await Promise.all([
      client.fetch(heroQuery),
      client.fetch(roomsQuery),
      client.fetch(galleryQuery),
    ]);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    // Data remains null/empty, components will use their static fallbacks
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero data={heroData} />
      <About />
      <Rooms data={roomsData} />
      <Amenities />
      <Gallery data={galleryData} />
      <Dining />
      <Testimonials />
      <Location />
      <Booking />
      <Footer />
    </main>
  );
}
