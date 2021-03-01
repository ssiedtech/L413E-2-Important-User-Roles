import React, { useState } from "react";

const UserRoles2 = (props) => {
  // useState is the function component equivalent of the inherited 'setState'
  const [clickedText, setClickedText] = useState([]);

  var handleClick = (i) => {
    setClickedText(props.texts2[i]);
  };

  return (
    <div>
      {props.texts2.map((text, i) => (
        <button key={i} onClick={() => handleClick(i)}>
          {props.texts2[i][0]}
        </button>
      ))}
      {clickedText.length > 0 && <p></p>}
      <ul>
        {clickedText.map((t, i) => (
          <li key={`text-${i}`}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserRoles2;
