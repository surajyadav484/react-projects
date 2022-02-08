import { Loading } from "./Components/Loading";
import React, { useState, useEffect } from 'react'
import Tours from "./Components/Tours";
const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  //fetching data using async and await
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);


    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} />
      </main>
    );
  }

}

export default App;
