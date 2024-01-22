import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

function Hero() {
  return (
    <div
      className="grid md:grid-cols-[auto_1fr] lg:grid-cols-[auto_auto] place-items-center justify-items-center items-center mt-20 sm:pt-16 xl:mb-10 md:py-5 md:h-[75vh] lg:h-[90vh] xl:my-12 section "
      id="home"
    >
      <HeroContent />
      <HeroImage />
    </div>
  );
}

export default Hero;
