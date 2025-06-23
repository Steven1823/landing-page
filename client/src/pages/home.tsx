import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturedListings from "@/components/featured-listings";
import WhyChooseUs from "@/components/why-choose-us";
import LeadCaptureForm from "@/components/lead-capture-form";
import Footer from "@/components/footer";
import AuthModals from "@/components/auth-modals";
import VideoModal from "@/components/video-modal";
import WhatsAppWidget from "@/components/whatsapp-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturedListings />
      <WhyChooseUs />
      <LeadCaptureForm />
      <Footer />
      <AuthModals />
      <VideoModal />
      <WhatsAppWidget />
    </div>
  );
}
