import React, { Component } from 'react';
import Todo from '../containers/todo';
import Table from '../containers/table';
import Title from '../containers/title';
import './app.css';

const App = () => {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div><Title /></div>
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <Todo />
            </div>
            <Table />
          </div>
        </div>
      </div>
    );
  };


export default App;