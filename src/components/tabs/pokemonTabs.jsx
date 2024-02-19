import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import ImageTabs from './tabs';

const PokemonTabs = () => {
  const pokemonList = [
    {
      name: 'Alex',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Mario',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Ueder',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Max',
      link: 'https://images.unsplash.com/photo-1707757618962-010cdd24bbc2?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <Tabs.Root className="flex flex-col h-screen">
      <Tabs.Content className="p-5" value="tab1">
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
          <div className="w-1/3">
            <img
              className="z-10"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
              alt=""
            />
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
      <Tabs.Content className="p-5" value="tab2">
        <fieldset className="h-[80%] w-[80%] mx-auto flex">
          <div className="bg-red-400 h-full w-1/3 flex gap-4 justify-center">
            <div className="w-1/3 h-1/2 flex flex-col gap-4">
              <div className="bg-yellow-800 h-[86px] w-[130px]"></div>
              <div className="bg-yellow-900 h-[86px] w-[130px]"></div>
            </div>
            <div>
              <ImageTabs />
            </div>
          </div>
          <div className="w-1/3">
            <img
              className="z-10"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
              alt=""
            />
          </div>
          <div className="bg-red-200 w-1/3 h-[100%]">
            <div className="h-[80%] start-6 flex flex-col justify-center">
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
            <div className="h-[20%] flex justify-center">
              <div className="bg-[#F7BC1A] w-[496px] h-[52px] flex justify-center items-center font-extrabold text-2xl">
                <p>START THE MISSIONS</p>
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
                  className="relative bg-red-100 transform -skew-x-3 h-[212px] w-[126px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
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

      {/* </Tabs.Root> */}
    </Tabs.Root>
  );
};

export default PokemonTabs;
