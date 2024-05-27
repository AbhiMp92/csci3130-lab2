
import React, { useEffect } from 'react';

const Home = ({ visits, setVisits }) => {
   
  useEffect(() => {
    setVisits(prevVisits => prevVisits + 1);
  }, [setVisits]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Banner ID: B00893455</p>
    </div>
  );
};

export default Home;