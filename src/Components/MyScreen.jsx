import React from 'react';

const MyScreen = ({ calc }) => {
   return (
      <div className='mb-2 border-solid border-4a border-2 border-double flex justify-end min-h-20 bg-1a rounded'>
         {calc.answ !== '' ? calc.answ : calc.num1}
      </div>
   );
};

export default MyScreen;