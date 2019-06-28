import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';
import Display from './components/Display';
import CardList from './components/CardList';
import {users} from './data/users';
import Form from './components/Form';
//  gaearon , sophiebits , sebmarkbage ,bvaughn

function App() {
  const [counter, setCounter] = useState(20);
  const [user , newState] = useState(users.test);
  const handleClick = (count) => setCounter(counter*count);
  const addNewProfile = (profileData => {
      console.log('App::',profileData,user);
      newState([...user,profileData]);
  });
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
      </header>
      <Button onClick={handleClick} count={1}/>
      <Button onClick={handleClick} count={2}/>
      <Button onClick={handleClick} count={4}/>
      <Display message={counter}/>
      <CardList users={user}/>
      <Form onSubmit={addNewProfile}/>
    </div>
  );
}

export default App;
