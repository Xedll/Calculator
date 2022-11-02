import React from 'react';

const Wrapper = ({ children }) => {
   return (
      <div className='p-1.5 bg-2a max-w-xs border-2 border-4a border-solid rounded-lg '>
         {children}
      </div>
   );
};

export default Wrapper;