import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import CharacterTabs from './characterTabs';

// import ImageTabs from './tabs';

const PokemonTabs = () => {
  const pokemonList = [
    {
      name: 'pokemon0',
      link: 'images/section2/chat0.png',
    },
    {
      name: 'pokemon1',
      link: 'images/section2/chat1.png',
    },
    {
      name: 'pokemon2',
      link: 'images/section2/chat2.png',
    },
    {
      name: 'pokemon3',
      link: 'images/section2/chat3.png',
    },
  ];

  return (
    <Tabs.Root className="flex flex-col h-screen relative" defaultValue="tab0">
      <Tabs.Content className="p-5 w-full h-full" value="tab0">
        <CharacterTabs />
      </Tabs.Content>

      <Tabs.Content className="p-5 w-full" value="tab1">
        <CharacterTabs />
      </Tabs.Content>

      <div className="h-[10%] flex mb-60 w-[95%] justify-center ">
        <div className="w-7/12"></div>
        <Tabs.List
          className="shrink-0 flex flex-col gap-4 w-3/12 pl-5"
          aria-label="Manage your account"
        >
          <div className="flex flex-wrap flex-col gap-4">
            <div className="bg-[#F7BC1A] w-[300px] 2xl:w-[496px] h-[52px] mb-4 flex justify-center items-center font-extrabold text-xl 2xl:text-4xl">
              <p>START THE MISSIONS</p>
            </div>
            <div>
              {pokemonList?.map((item, index) => {
                return (
                  <Tabs.Trigger
                    className=" transform -skew-x-3 h-[150px] w-[80px] 2xl:h-[212px] 2xl:w-[126px]"
                    key={item.name}
                    value={`tab${index}`}
                  >
                    <img
                      className="object-cover w-full h-full"
                      src={item.link}
                      alt={item.name}
                    />
                  </Tabs.Trigger>
                );
              })}
            </div>
          </div>
        </Tabs.List>
      </div>

      <img
        src="images/section2/background.png"
        className="absolute -z-20"
        alt=""
      />
    </Tabs.Root>
  );
};

export default PokemonTabs;
