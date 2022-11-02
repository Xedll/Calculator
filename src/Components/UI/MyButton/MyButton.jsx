import React from 'react';

const MyButton = (props) => {
   return (
      <button className={`${props.className} bg-4a border-solid border-2a p-2 rounded shadow-lg hover:bg-5a  `} onClick={props.onClick}>
         {props.children}
      </button>
   );
};

export default MyButton;