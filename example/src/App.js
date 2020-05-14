import React from 'react'
import axios from 'axios';
import InitialPageLoader from 'initialpageloader';
import 'initialpageloader/dist/index.css';

const App = () => {
  //http://www.omdbapi.com/?&page=1&s=avengers
  return (
    <InitialPageLoader
      api={()=>axios.get('http://www.omdbapi.com/?&apikey=edd4e8b1&page=1&s=avengers')} // Promise
      successCondition={(data)=> (data.Response == 'True')}
      responseParser={data => data.data}
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
