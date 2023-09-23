import Head from 'next/head';

import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Study</title>
        <meta
          name='description'
          content='Learn easy from Home.'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>

      <Header />

      <main>
        <HeroSection />
      </main>
    </>
  );
}
