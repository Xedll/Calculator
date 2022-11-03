import React from 'react';

const Wrapper = ({ children }) => {
   return (
      <div className=' bg-2a border-2 border-4a border-solid rounded-lg m-3.5 p-1.5 '>
         {children}
      </div>
   );
};

export default Wrapper;