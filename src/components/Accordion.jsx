import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="border-b border-[#FFE20A] py-4">
      <div className="flex justify-between font-medium" onClick={() => setIsActive(!isActive)}>
        <div className='lg:text-lg'>{title}</div>
        <div className=' cursor-pointer'>{isActive ? <img className='w-6 h-6' src='/images/icons/minus.png' /> :  <img className='w-6 h-6'  src='/images/icons/plus.png' />}</div>
      </div>
      {isActive && <div className="text-sm mt-2">{content}</div>}
    </div>
  );
};

export default Accordion;
