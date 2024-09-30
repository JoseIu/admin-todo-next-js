'use client';

import { setCookie } from 'cookies-next';
import { useState } from 'react';

type Props = {
  correntTab?: number;
  tabOptions?: number[];
};

export const TabBar = ({ correntTab = 1, tabOptions = [1, 2, 3, 4] }: Props) => {
  const [selected, setSelected] = useState(correntTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab', tab.toString());
  };

  return (
    <div className="w-full p-2 grid grid-cols-5">
      {tabOptions.map((tabOption) => (
        <div key={tabOption}>
          <input
            checked={selected === tabOption}
            onChange={() => {}}
            className="peer hidden"
            type="radio"
            name={tabOption.toString()}
            id={tabOption.toString()}
          />
          <label
            className="block p-2 rounded-md text-center cursor-pointer select-none peer-checked:bg-btnColor peer-checked:font-bold peer-checked:text-textWhite"
            htmlFor={tabOption.toString()}
            onClick={() => onTabSelected(tabOption)}
          >
            {tabOption}
          </label>
        </div>
      ))}
    </div>
  );
};
