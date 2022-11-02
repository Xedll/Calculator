import React, { Children } from 'react';

const MyButtonBox = (props) => {
   return (
      <div className='grid grid-cols-4 grid-rows-5 gap-2 '>
         {props.children}
      </div>
   );
};

export default MyButtonBox;