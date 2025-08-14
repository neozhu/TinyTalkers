import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CourseSystem from "@/components/course-system";
import CourseSchedule from "@/components/course-schedule";
import PricingSection from "@/components/pricing-section";
import TeacherTeam from "@/components/teacher-team";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import BookingForm from "@/components/booking-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CourseSystem />
        <CourseSchedule />
        <PricingSection />
        <TeacherTeam />
        <Testimonials />
        <FAQSection />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
