import React from 'react';

const Button = ({ content }) => {
  return (
    <button className='rounded-lg border-2 border-black py-4 px-6 text-2xl font-bold hover:bg-black hover:text-orange-50'>
      {content}
    </button>
  );
};

export default Button;
