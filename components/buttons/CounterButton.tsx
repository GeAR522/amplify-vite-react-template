import * as React from 'react';

interface ICounterButton {
  plusOrMinus: 'plus' | 'minus';
  onClick: () => void;
}

export default function CounterButton({
  plusOrMinus,
  onClick,
}: ICounterButton) {
  const isPlus = plusOrMinus === 'plus';
  const colourScheme = isPlus
    ? 'hover:bg-pink-900 hover:border-red-200'
    : 'hover:border-red-200 hover:bg-red-500';

  return (
    <button
      type="button"
      value={'button'}
      id="counter-button"
      className={`flex justify-center items-center px-2 py-1 border-4 w-[42px] h-[36px] border-stone-400  bg-gray-300 ${colourScheme} focus:outline-none text-white`}
      onClick={onClick}
    >
      <p
        className={`text-white ${isPlus ? 'text-2xl' : 'text-4xl'} font-extrabold ${isPlus ? '-mt-[6px]' : '-mt-[10px]'}`}
      >
        {isPlus ? '+' : '-'}
      </p>
    </button>
  );
}
