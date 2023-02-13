import React from 'react';

const Button = ({ content }) => {
  return (
    <button className=' rounded-lg border border-black py-2 px-4 font-bold hover:bg-black hover:text-orange-50'>
      {content}
    </button>
  );
};

export default Button;
