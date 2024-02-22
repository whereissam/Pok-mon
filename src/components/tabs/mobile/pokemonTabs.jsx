import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import CharacterTabs from './characterTabs';

const MobilePokemonTabs = () => {
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
    <Tabs.Root
      className="flex flex-col relative h-[500px] gap-2"
      defaultValue="tab0"
    >
      <Tabs.Content className="w-full h-full mt-16" value="tab0">
        <CharacterTabs />
      </Tabs.Content>

      <Tabs.Content className="w-full h-full mt-16" value="tab1">
        <CharacterTabs />
      </Tabs.Content>

      <div className="flex w-full justify-center ">
        <Tabs.List
          className="shrink-0 flex justify-center gap-4"
          aria-label="Manage your account"
        >
          {pokemonList?.map((item, index) => {
            return (
              <Tabs.Trigger
                className=" transform -skew-x-3 h-[120px] w-[70px]"
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
        </Tabs.List>
      </div>

      <img
        src="images/section2/background-mobile.png"
        className="absolute -z-20"
        alt=""
      />
      {/* <img src="images/section2/background-mobile.png" alt="" /> */}
    </Tabs.Root>
  );
};

export default MobilePokemonTabs;
