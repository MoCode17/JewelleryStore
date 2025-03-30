import Featured from "~/components/Featured";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collection from "~/components/Collection";
import OurStory from "~/components/OurStory";
import Newsletter from "~/components/Newsletter";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Featured />
      <Collection />
      <OurStory />
      <Newsletter />
      <Footer />
    </div>
  );
}
