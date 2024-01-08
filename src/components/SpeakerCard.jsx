import React from 'react';

const SpeakerCard = () => {
  return (
    <div className='p-2 my-3 sm:w-[48%] bg-[#0A0E00] text-[#FFE20A] rounded-sm'>
      <img src="/images/speaker.png" alt="" />
      <div className='m-2'>
        <p>Tsumugi Mei</p>
        <p className='text-xs'>Rin Tech Studios</p>
      </div>
    </div>
  );
};

export default SpeakerCard;