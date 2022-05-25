import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";


function TreeNode(props) {

  const [input, setInput] = useState(props.name);
  const [children, setChildren] = useState(props.children);;

  const addChild = (e) => {
    e.preventDefault()
    
    // Set to empty children or keep children and add new node with no children.
    setChildren((children) => [...(children || []), { name: input, children: [] }]);

    // Set the value of the name of the fruit from the input text field.
    setInput(`${props.name}`);

  };

  //  Can also enable a AddChild button is you want a button instead of the form field
  //    or perhaps both.   Nice way to test things out.
  //  Iterate over the children coming in from props and for each child we recursively
  //    call TreeNode to do the same each time passing the name of the fruit and
  //    the children to save in state.
  return (
    <div className="Tree">
      <div className="input-group">
      <form onSubmit={addChild}>
        <span>{props.name}</span>
              <input type="text" name={props.name} onChange={(e) => setInput(e.target.value)}></input>
        </form>
        <button onClick={addChild}>Add child</button>
      </div>
      <div className="children">
        {children &&
          children.map((item, index) => {
            return <TreeNode key={index} name={item.name} children={item.children} />;
          })}
      </div>
    </div>
  );
};

export default TreeNode;