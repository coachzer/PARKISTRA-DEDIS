import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'; 

const SearchPage = () => {
  const router = useRouter();
  const { term } = router.query;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (term) {
      setLoading(true);
      // Replace this with your actual search API or logic
      fetch(`/api/search?term=${encodeURIComponent(term)}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.posts);
          setLoading(false);
        });
    }
  }, [term]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts.length) {
    return <div>No results found for "{term}".</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          // Render other post details
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
