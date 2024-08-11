import React, { useEffect, useState, useTransition } from 'react';
import { fetchData } from '../utils/api';
import SearchComponent from './SearchComponent';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    startTransition(() => {
      setQuery(newQuery); 
    });
  };

  const filteredData = data?.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  ) || [];

  return (
    <div>
      <h2>Data from API</h2>
      <SearchComponent 
        query={query} 
        setQuery={setQuery} 
        handleInputChange={handleInputChange} 
      />
      {data && (
        <div>
          {filteredData.map((item, index) => (
            <div style={{ marginLeft: '20px' }} key={index}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) }
      {isPending && <p>Loading results...</p>}
    </div>
  );
};

export default DataFetcher;
