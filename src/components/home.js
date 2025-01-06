import * as React from 'react';
import GeorgetownSection from './sections/georgetown-section';
import DmiSection from './sections/dmi-section';
import RoseHulmanSection from './sections/rose-hulman-section';
import InterestsSection from './sections/interests-section';
import DeloitteInternSection from './sections/deloitte-intern-section';
import DeloitteFullTimeSection from './sections/deloitte-full-time-section';

const Home = ({ children }) => {
  return (
    <main role="main" style={{ display: 'grid', width: '100vw', overflowX: 'hidden' }}>
      <DeloitteFullTimeSection></DeloitteFullTimeSection>
      <GeorgetownSection></GeorgetownSection>
      <DeloitteInternSection></DeloitteInternSection>
      <DmiSection></DmiSection>
      <RoseHulmanSection></RoseHulmanSection>
      <InterestsSection></InterestsSection>
    </main>
  );
};

export default Home;
