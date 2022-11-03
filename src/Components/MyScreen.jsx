import React from 'react';

const MyScreen = ({ calc }) => {
   return (
      <div className='mb-2 border-solid border-4a border-2 border-double flex justify-end min-h-20 bg-1a rounded text-ellipsis overflow-hidden max-w-140'>
         {String(calc.num2 + calc.sign + calc.num1)}
      </div>
   );
};

export default MyScreen;