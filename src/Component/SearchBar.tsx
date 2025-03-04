import React from 'react';

interface Props {
  onSearch: (pattern: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;