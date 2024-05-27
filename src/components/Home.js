
import React, { useEffect } from 'react';

const Home = ({ visits, setVisits }) => {
    console.log("visits", visits);
  useEffect(() => {
    setVisits(visits+1);
  }, [setVisits, visits]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Banner ID: B00893455</p>
    </div>
  );
};

export default Home;