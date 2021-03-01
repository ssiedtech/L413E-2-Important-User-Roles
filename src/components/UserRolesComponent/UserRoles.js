import React, { useState } from "react";
import './UserRoles.css'


const UserRoles = (props) => {
  // useState is the function component equivalent of the inherited 'setState'
  const [clickedText, setClickedText] = useState([]);

  var handleClick = (i) => {
    setClickedText(props.texts[i]);
  };

  

  return (
    <div >
      


      {props.texts.map((text, i) => (
        <img src={props.texts[0]} key={i} onClick={() => handleClick(i)}/>
      ))}
      
      <ul>
        {clickedText.map((t, i) => (
          <li key={`text-${i}`}>{t}</li>
        ))}
      </ul>

      
    </div>
  );
};

export default UserRoles;
