import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

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
        <link
          rel='icon'
          href='home-study-logo.png'
        />
      </Head>
      <main>
        <h1>Hello Word !</h1>
      </main>
    </>
  );
}
