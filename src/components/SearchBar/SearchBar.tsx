import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';

import css from './SearchBar.module.css';

type SearchBarProps = {
  onSearch: (searchValue: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const searchValue = (
      form.elements.namedItem('searchInput') as HTMLInputElement
    )?.value;

    if (searchValue.trim() === '') {
      toast.error('Please enter the search term!', {
        position: 'top-right',
      });
      return;
    }
    onSearch(searchValue);
    form.reset();
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button
          className={css.searchBtn}
          type="submit"
          aria-label="search images and photos"
          title="Search"
        >
          <CiSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
