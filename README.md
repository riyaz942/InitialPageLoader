# initialpageloader

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/initialpageloader.svg)](https://www.npmjs.com/package/initialpageloader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save initialpageloader
```

## Usage

```jsx
import React, { Component } from 'react'
import InitialPageLoader from 'initialpageloader'

class Example extends Component {
  render() {
    return (
      <InitialPageLoader
        api={()=>axios.get('')} // Promise
        successCondition={(data)=> (data.Response == 'True')}
        responseParser={data => data.data}
      >
        {
          (data) => (
            <div>
              Loaded {data.value}
            </div>
          )
        }
      </InitialPageLoader>
    )
  }
}
```

## License

MIT © [riyaz942](https://github.com/riyaz942)
