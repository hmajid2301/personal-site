import { Index, SerialisedIndexData } from 'elasticlunr';
import React, { useState, useEffect } from 'react';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { Input } from '~/components/atoms/Input';
import { SearchItems, Page } from '~/components/molecules/SearchItems';

const Search = ({
  searchIndex,
}: {
  searchIndex: SerialisedIndexData<Page>;
}) => {
  const index = Index.load(searchIndex);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Page[]>([]);
  const searchInput = React.createRef<HTMLInputElement>();

  useEffect(() => {
    searchResults('react');
    searchInput.current?.focus();
  }, []);

  function searchResults(searchQuery: string) {
    // @ts-ignore
    const res = index.search(searchQuery, { expand: true }).map(({ ref }) => {
      return index.documentStore.getDoc(ref);
    });
    setResults(res);
  }

  return (
    <SearchContainer>
      <SearchInputContainer>
        <Icon
          className="px-2"
          icon={<SearchIcon size="1em" />}
          label="Search Icon"
        />
        <Input
          ref={searchInput}
          className="px-2"
          dataId="SearchBar"
          label="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const searchQuery = e.target.value;
            setQuery(searchQuery);
            searchResults(searchQuery);
          }}
          placeholder="Search"
          value={query}
        />
      </SearchInputContainer>
      <ul>
        <SearchItems query={query} results={results} urlPrepend="/blog/" />
      </ul>
    </SearchContainer>
  );
};

const SearchContainer = tw.div`max-w-screen-md mx-auto pt-8`;

const SearchInputContainer = tw.div`flex w-full text-left h-12 text-lg focus-within:shadow-outline my-8`;

export default Search;
