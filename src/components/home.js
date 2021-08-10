import * as React from 'react';
import GeorgetownSection from './sections/georgetown-section';
import DmiSection from './sections/dmi-section';
import RoseHulmanSection from './sections/rose-hulman-section';

const Home = ({ children }) => {
  return (
    <div style={{ display: 'grid', width: '100vw', gridTemplateRows: 'repeat(3, 1fr)' }}>
      <GeorgetownSection></GeorgetownSection>
      <DmiSection></DmiSection>
      <RoseHulmanSection></RoseHulmanSection>
    </div>
  );
};

export default Home;
