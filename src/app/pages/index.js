import Head from 'next/head'; //ne znam ? 
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Park Istra</title>
        <meta name="description" content="napisacemo ovde sta zelimo" />
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
}
