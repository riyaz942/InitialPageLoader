import React from 'react'

import InitialPageLoader from 'initialpageloader'
import 'initialpageloader/dist/index.css'

const App = () => {
  //http://www.omdbapi.com/?&page=1&s=avengers
  return (
    <InitialPageLoader
      api={()=>fetch('http://www.omdbapi.com/?&apikey=edd4e8b1&page=1&s=avengers')}    
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
