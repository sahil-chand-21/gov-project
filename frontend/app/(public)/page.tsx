import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { NoticesSection } from "@/components/NoticesSection";
import { DocumentsSection } from "@/components/DocumentsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
    return (
        <main className="flex-1 flex flex-col">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <PropertiesSection />
            <NoticesSection />
            <DocumentsSection />
            <ContactSection />
        </main>
    );
}
