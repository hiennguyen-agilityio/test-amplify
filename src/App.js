import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{process.env.REACT_APP_AWS_COGNITO_REGION}</p>
        <p>{process.env.REACT_APP_AWS_USER_POOL_ID}</p>
        <p>{process.env.REACT_APP_AWS_USER_POOL_WEB_CLIENT_ID}</p>
        <p>{process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT}</p>
        <p>{process.env.REACT_APP_AWS_APPSYNC_REGION}</p>
        <p>{process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE}</p>
        <p>{process.env.REACT_APP_AWS_AUTHENTICATION_FLOW_TYPE}</p>
      </header>
    </div>
  );
}

export default App;
