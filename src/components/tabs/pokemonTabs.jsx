import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import CharacterTabs from './characterTabs';
import ImageTabs from './tabs';

const PokemonTabs = () => {
  const pokemonList = [
    {
      name: 'pokemon0',
      link: 'https://lanhu.oss-cn-beijing.aliyuncs.com/ps2cew9fh2mfo0aapqsz6ayg54jp49we2xdcbe39165-f7c4-418d-b6b8-fdbc8fcad467',
    },
    {
      name: 'pokemon1',
      link: 'https://lanhu.oss-cn-beijing.aliyuncs.com/pshfsdjhi3z1mkoapmla1pyqvlh3jg8v7oifd7de9c1-fc08-4df4-97ce-5d8b2ae44475',
    },
    {
      name: 'pokemon2',
      link: 'https://lanhu.oss-cn-beijing.aliyuncs.com/psn0w1a60l68ekxg5h70hzkii95j2fzcbe2f22609-5b83-4bd9-94da-b4b075884730',
    },
    {
      name: 'pokemon3',
      link: 'https://lanhu.oss-cn-beijing.aliyuncs.com/psnqhwoakgbfsikvf8bnt0rosl7r46kzr2999fdb2-e74c-4749-bf3b-81650677de66',
    },
  ];

  return (
    <Tabs.Root className="flex flex-col h-screen">
      <Tabs.Content className="p-5 w-full" value="tab0">
        <CharacterTabs />
      </Tabs.Content>

      <Tabs.Content className="p-5 w-full" value="tab1">
        <fieldset className="h-[100%] w-[80%] mx-auto flex justify-center">
          <div className="bg-red-400 h-full w-1/3 flex gap-4 justify-center">
            <div className="w-1/3 h-1/2 flex flex-col gap-4">
              <div className="bg-yellow-800 h-[86px] w-[130px]"></div>
              <div className="bg-yellow-900 h-[86px] w-[130px]"></div>
            </div>
            <div>
              <ImageTabs />
            </div>
          </div>
          <div className="w-1/3 relative">
            <div className="absolute">
              <img
                className="z-10"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps0qnq2av2yx5a2z41a509j6dnhlybxy4gha33822d0-40c1-4b38-a717-281b51c06174"
                alt="centerPic"
              />
            </div>
          </div>
          <div className="bg-red-200 w-1/3 h-[100%]">
            <div className="h-[90%] start-6 flex flex-col justify-center">
              <div className="relative -rotate-[15deg] h-[15%]">
                <p className="fill absolute -top-32" data-text="GENOS">
                  HHHH
                </p>
              </div>
              <div className="h-2/3 flex flex-col ml-20 justify-start items-start">
                <p className="font-extrabold text-7xl mb-10">CONNECT WALLET</p>
                <p className="h-20 text-2xl">
                  Participate in or Airdrop Participate in our Airdrop Pioneer P
                </p>
              </div>
            </div>
          </div>
        </fieldset>
      </Tabs.Content>

      <div className="h-[10%] flex mb-20 w-[90%] justify-center ">
        <div className="w-2/3"></div>
        <Tabs.List
          className="shrink-0 flex gap-4 w-1/3"
          aria-label="Manage your account"
        >
          <div className="flex flex-wrap gap-4 justify-evenly w-full">
            <div className="bg-[#F7BC1A] w-[496px] h-[52px] mb-4 flex justify-center items-center font-extrabold text-2xl">
              <p>START THE MISSIONS</p>
            </div>
            {pokemonList?.map((item, index) => {
              return (
                <Tabs.Trigger
                  className="relative transform -skew-x-3 h-[212px] w-[126px]"
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
        </Tabs.List>
      </div>
    </Tabs.Root>
  );
};

export default PokemonTabs;
