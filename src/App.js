import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/UI/Header';
import axios from 'axios';
import CharcterGrid from './components/Characters/CharcterGrid';
import Search from './components/UI/Search';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query,setQuery] =useState('');

  useEffect(() => {

    const fetchItems = async () => {

      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      // console.log(result.data); // this log is only for checking if the data is getting or not

      setItems(result.data);
      setIsLoading(false);

    };
    fetchItems();

  }, [query]); 
  // everytime we type this will request api that's dangeorous


  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) =>setQuery(q)}/>
      <CharcterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}


export default App;
