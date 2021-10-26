import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './InputSearch.css';

export const InputSearch = () => {
  const [input, setInput] = useState('');
  
  const history = useHistory();

  const handleInputChange = e => {
    setInput(e.target.value);
  }
  
  const handleFormSubmit = e => {
    e.preventDefault();  
    history.push(`/?search=${input}`);
    setInput('');
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="search__input"
          placeholder="Search..."
        />
        <span className="search__focus-border"></span>
      </form>
    </div>
  )
}
