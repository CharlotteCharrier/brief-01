import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (<>
    <Header />
    <main>
      <Features />
      <Pricing />
    </main>
    <Footer />
  </>);
}
