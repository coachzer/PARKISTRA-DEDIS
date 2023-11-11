import Head from 'next/head';
import Header from '../components/Header';
import type { NextPage } from 'next'; // Import NextPage type for TypeScript

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Park Istra</title>
        <meta name="description" content="We will write here what we want" />
        {/* Add any other SEO-related tags here */}
      </Head>

      <Header />
      
      <main className="p-4">
        <h1 className="text-xl font-bold">Welcome to Park Istra</h1>
        <p>This is the homepage of our community initiative...</p>
        {/* Add more content here */}
      </main>
      
      {/* Add your footer here */}
    </div>
  );
};

export default Home;
