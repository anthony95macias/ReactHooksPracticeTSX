import React from 'react';
import './App.css';
import UseStateComponent from './UseStateComponent';
import UseEffectComponent from './UseEffectComponent';
import UseContextComponent from './UseContextComponent';
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
import CustomHookComponent from './CustomHookComponent';
import EvenMoreReactComponents from './EvenMoreReactComponents';


function App() {
  return (
    <div>
      <h1>Even More React Components</h1>
      <EvenMoreReactComponents />
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
    <UseReducerComponent />
      <h1>useContext</h1>
    <UseContextComponent />
      <h1>useEffect</h1>
    <UseEffectComponent />
      <h1>useState</h1>
    <UseStateComponent />
    </div>
  );
}

export default App;
