import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';

const App = () => {
  return (
    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Movie List</h1>
      </nav>
      
      <List />
    </div>
  );
};


export default App;