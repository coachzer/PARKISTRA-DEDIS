// components/SearchBox.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the search page with the query
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Iskanje..."
        aria-label="Search posts"
      />
      <button type="submit">
        <img src="/logo.png" alt="Search" />
      </button>
    </form>
  );
};

export default SearchBox;
