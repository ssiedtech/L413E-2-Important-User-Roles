import React, { useState } from "react";

function UserRolesComponent(props) {
  const [showResults, setShowResults] = useState(false);

  const clickHandler = () => {
    if (showResults === false) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div className="user-roles-container-row">
      <img className="user-roles-image"src= {props.image} alt="image" onClick = {clickHandler}></img>
      
      {showResults ? (
        <div className="user-roles-text">  
          <p>{props.description}</p>
        </div>
      ) : <p><strong>{props.name}</strong></p>
    }
    </div>
  );
}
export default UserRolesComponent;
