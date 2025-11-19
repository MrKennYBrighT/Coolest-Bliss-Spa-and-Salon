import Hero from '../components/Hero';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import ServicesPreview from '../components/ServicesPreview';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import MeetTheTeam from '../components/MeetTheTeam';
import SpecialOffers from '../components/SpecialOffers';
import ContactBlock from '../components/ContactBlock';


export default function Home() {
  return (
    <div>
      <Hero />
      <WhatSetsUsApart />
      <ServicesPreview />
      <Gallery />
      <Testimonials />
      <MeetTheTeam />
      <SpecialOffers />
      <ContactBlock />
    </div>
  );
}
