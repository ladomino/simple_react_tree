import React from 'react';
import TreeNode from './TreeNode.js'
import data from './data.json';
import './App.css';

// A simple and easy way to setup JSON test data for a nested object with
//   children tree structure.   It iterates well as you know whether you
//   have children or not.
// testtreeData is not used - it was setup for testing.  Instead we read
//   the data from the JSON file.
const testtreeData = {
  name: "apples",
  children: [
    {
      name: "gala",
      children: []
    },
    {
      name: "red",
      children: [
        {
          name: "fuji",
          children: []
        },
        { 
          name: "mcintosh",
          children: [
            {
              name: "granny",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "honeycrisp",
      children: []
    },
    { 
      name: "envy",
      children: []
    }
  ]
};

const treeData  = JSON.parse(JSON.stringify(data))

function App() {
  return (
  <div className="App">
    <h1>Simple React Recursive Fruit Tree Structure Adding a Child</h1>
    <TreeNode name={treeData.name} children={treeData.children} />;
  </div>
  )
};

export default App;
