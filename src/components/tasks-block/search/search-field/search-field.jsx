import React from 'react';
import { SearchInput, SearchWraper } from './search-input.js';

function SearchField() {
  return (
    <SearchWraper>
      <SearchInput placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявку" />
    </SearchWraper>
  );
}

export default SearchField;
