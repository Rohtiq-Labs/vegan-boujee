import Link from "next/link";
import { Nav } from "@/components/sections/nav/nav";
import { Footer } from "@/components/sections/footer/footer";
import { GalleryHero, GalleryClosing } from "@/components/sections/gallery/gallery-hero";
import { GalleryFeatured } from "@/components/sections/gallery/gallery-featured";
import { GalleryStories } from "@/components/sections/gallery/gallery-stories";
import { GalleryReimagined } from "@/components/sections/gallery/gallery-reimagined";
import { GalleryAesthetic } from "@/components/sections/gallery/gallery-aesthetic";
import "./gallery.css";

export default function GalleryPage(): React.JSX.Element {
  return (
    <div className="gallery-page">
      <Nav />
      <main>
        <GalleryHero />
        <GalleryFeatured />
        <GalleryStories />
        <GalleryReimagined />
        <GalleryAesthetic />
        <GalleryClosing />
      </main>
      <Footer variant="gallery" />
      <Link href="/" className="gl-back-home">
        ← Back to Home
      </Link>
    </div>
  );
}
