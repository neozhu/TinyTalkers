import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SoundboardExperience from "@/components/soundboard-experience";
import InteractiveAssessment from "@/components/interactive-assessment";
import CourseSystem from "@/components/course-system";
import LearningLoop from "@/components/learning-loop";
import CourseSchedule from "@/components/course-schedule";
import ComparisonSection from "@/components/comparison-section";
import PricingSection from "@/components/pricing-section";
import TeacherTeam from "@/components/teacher-team";
import CampusShowcase from "@/components/campus-showcase";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import BookingForm from "@/components/booking-form";
import Footer from "@/components/footer";
import LiveBookingToast from "@/components/live-booking-toast";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <SoundboardExperience />
        <InteractiveAssessment />
        <CourseSystem />
        <LearningLoop />
        <CourseSchedule />
        <ComparisonSection />
        <PricingSection />
        <TeacherTeam />
        <CampusShowcase />
        <Testimonials />
        <FAQSection />
        <BookingForm />
      </main>
      <Footer />
      <LiveBookingToast />
    </>
  );
}
