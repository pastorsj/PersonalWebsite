// src/components/home.js
import * as React from 'react';
import Timeline from './timeline/timeline';
import TimelineCard from './timeline/timeline-card';
import InterestsSection from './sections/interests-section';
import sectionsData from '../data/sections.json';

const Home = () => {
  return (
    <main
      role="main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowX: 'hidden',
        backgroundColor: '#f8f9fa'
      }}
    >
      {/* Timeline section */}
      <section style={{ padding: '4rem 0' }}>
        <Timeline>
          {sectionsData.sections.map((section, index) => (
            <TimelineCard key={section.id} section={section} index={index} />
          ))}
        </Timeline>
      </section>

      {/* Interests section */}
      <InterestsSection />
    </main>
  );
};

export default Home;
