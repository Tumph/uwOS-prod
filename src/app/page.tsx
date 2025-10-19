'use client';

import { useState } from 'react';
import { AppGrid } from '@/components/AppGrid';
import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <main>
      <div className="search-wrapper" style={{ width: '390px', margin: '0 auto 20px' }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <AppGrid searchText={searchText} />
    </main>
  );
}