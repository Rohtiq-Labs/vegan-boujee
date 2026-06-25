import Link from "next/link";
import { Nav } from "@/components/sections/nav/nav";
import { Footer } from "@/components/sections/footer/footer";
import { ServicesHero } from "@/components/sections/services/services-hero";
import { ServicesOverview } from "@/components/sections/services/services-overview";
import { ServicesSpotlight } from "@/components/sections/services/services-spotlight";
import { ServicesConsultation } from "@/components/sections/services/services-consultation";
import { ServicesGuide, ServicesClosing } from "@/components/sections/services/services-guide";
import "./services.css";

export default function ServicesPage(): React.JSX.Element {
  return (
    <div className="services-page">
      <Nav />
      <main>
        <ServicesHero />
        <ServicesOverview />
        <ServicesSpotlight />
        <ServicesConsultation />
        <ServicesGuide />
        <ServicesClosing />
      </main>
      <Footer variant="services" />
      <Link href="/" className="sv-back-home">
        ← Back to Home
      </Link>
    </div>
  );
}
