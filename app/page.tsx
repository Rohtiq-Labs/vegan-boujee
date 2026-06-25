import { Nav } from "@/components/sections/nav/nav";
import { Hero } from "@/components/sections/hero/hero";
import { Philosophy } from "@/components/sections/philosophy/philosophy";
import { Transformations } from "@/components/sections/transformations/transformations";
import { ClientMoments } from "@/components/sections/client-moments/client-moments";
import { Founder } from "@/components/sections/founder/founder";
import { Booking } from "@/components/sections/booking/booking";
import { Footer } from "@/components/sections/footer/footer";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Nav />
      <Hero />
      <Philosophy />
      <Transformations />
      <ClientMoments />
      <Founder />
      <Booking />
      <Footer />
    </>
  );
}
