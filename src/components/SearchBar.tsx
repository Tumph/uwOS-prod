'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');
  const [clearVisible, setClearVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setClearVisible(value.length > 0);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchValue('');
    setClearVisible(false);
    onSearch('');
  };

  return (
    <div className="search-container" style={{ width: '300px', margin: '20px auto' }}>
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
        style={{ width: '300px' }}
      />
      <span 
        className="clear-search" 
        style={{ display: clearVisible ? 'block' : 'none' }}
        onClick={clearSearch}
      >
        ✗
      </span>
    </div>
  );
}