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
      <SearchBar onSearch={handleSearch} />
      <AppGrid searchText={searchText} />
    </main>
  );
}