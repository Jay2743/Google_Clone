import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/?';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);
    // console.log('This is URL'+url);
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search74.p.rapidapi.com',
        'x-rapidapi-key': 'd36f8a136cmshb21fe34bb7e7c68p10becdjsnd044d6298951',
      },
    });


    const data = await res.json();
  //  console.log(data.results+ " This is data");

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);