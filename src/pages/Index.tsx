
import Hero from '../components/Hero';
import FeaturedArt from '../components/FeaturedArt';
import ArtistSpotlight from '../components/ArtistSpotlight';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedArt />
        <ArtistSpotlight />
      </main>
      <Footer />
    </>
  );
};

export default Index;
