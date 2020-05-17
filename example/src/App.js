import React, { useState } from 'react'
import axios from 'axios';
import InitialPageLoader from 'initialpageloader';
import 'initialpageloader/dist/index.css';

const App = () => {
  //http://www.omdbapi.com/?&page=1&s=avengers
  const [searchString, setSearchString] = useState('avengers somethig');

  return (
    <InitialPageLoader
      api={()=>axios.get(`http://www.omdbapi.com/?&apikey=edd4e8b1&page=1&s=${searchString}`)} // Promise
      responseParser={data => data.data}
      successCondition={(data)=> (data.Response == 'True')}
    >
      {
        (data) => (
          <div>
            Loaded
          </div>
        )
      }
    </InitialPageLoader>
  )
}

export default App
