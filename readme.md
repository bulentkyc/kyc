# KYC

Fetch’ ing data from web services is an important and essential part of the web development. Also there’re some routines after then fetching the data!
     -looping data
     -caching
     -creating content

 KYC manages this routine in a smart way for you. Just customise KYC and enjoy the convenience.

KYC serves you:

- [x]  Easy setup for API connection
- [x]  Easy content rendering over server response
- [x]  Caching response
- [x]  Setting expire time for cache
- [x]  API quota saving
- [x]  Bandwidth saving
- [x]  Performance improving

**Did you know?**
KYC works with all JS base technologies...
Like React, React Native, Type Script, Angular, Ionic, Vue, etc.

## What to get?

## What to set?

## How to install & import

```bash
$: npm install kyc
```

```jsx
import kyc from 'kyc';
```

## How to use in React

```jsx
import kyc from 'kyc';
import CustomComponent from './components/CustomComponent';

	let url = '';
	let headers = {};
	let key = '';

kyc(url,{ headers, 
					key, 
					component:(item)=>
						<CustomComponent 
							imgSrc = {item.background} 
							title = {item.title}
						/>, 
           timeDiff:'1d'}
).then(output => {
//Update
});
```

### React sample with hooks

- App.js

    ```jsx
    import './App.css';
    import kyc from 'kyc';
    import Card from './components/Card';
    import {useState, useEffect} from 'react';

    function App() {

      const [countries, setCountries] = useState();

      useEffect(() => {
        console.log('start');
        let url = 'https://restcountries.eu/rest/v2/all';

        kyc(url, {
            log: 'true',
            timeDiff:'1',
            component:(item)=>
    						<Card 
    							imgSrc = {item.flag} 
    							title = {item.name}
    						/>
          }
        ).then(output => {
          setCountries(output);
          console.log(output);
        });
      }, []);

      return (
        <div className="App">
          <h1>KYC Sample with countries</h1>
          {countries}
        </div>
      );
    }

    export default App;
    ```

- Card.js

    ```jsx
    import './Card.css';

    export default function (props) {
        return (
            <div className = "card">
                <img src = {props.imgSrc}/>
                <h3>{props.title}</h3> 
            </div>
        );
    }
    ```

### Repo Link

[bulentkyc/kyc-react-sample](https://github.com/bulentkyc/kyc-react-sample/tree/function-base)

### Github Page Link

[React App](https://bulentkyc.github.io/kyc-react-sample/)

### React sample with classes

Samples are coming soon...
For sure, you can try yourself and even contribute with us!

## How to use in Angular

Instructions are coming soon...
For sure, you can try yourself and even contribute with us!

### Angular Sample

Samples are coming soon...
For sure, you can try yourself and even contribute with us!

## How to use in Vue

Instructions are coming soon...
For sure, you can try yourself and even contribute with us!

### Vue Sample

Samples are coming soon...
For sure, you can try yourself and even contribute with us!