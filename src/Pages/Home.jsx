import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onsearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onsearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
