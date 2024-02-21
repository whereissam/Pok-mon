import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import ImageTabs from './tabs';

const CharacterTabs = () => {
  return (
    <>
      <Tabs.Root className="flex justify-center" defaultValue="characterTab0">
        <Tabs.List
          className="shrink-0 flex mr-[48px] flex-col gap-4 justify-center"
          aria-label="your account"
        >
          <Tabs.Trigger className="h-[86px] w-[130px]" value="characterTab0">
            <img src="images/section2/leftTab0.png" alt="left" />
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-yellow-900 h-[86px] w-[130px]"
            value="characterTab1"
          >
            <img src="images/section2/leftTab1.png" alt="" />
            {/* Password */}
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="ml-10" value="characterTab0">
          <fieldset className="h-[100%] w-[100%] mx-auto flex justify-center">
            <div className="h-full w-1/3 flex gap-4 justify-center items-end">
              <div className="w-1/3 h-1/2 flex flex-col gap-4"></div>
              <div>
                <ImageTabs />
              </div>
            </div>
            <div className="w-4/12 relative">
              <div className="absolute">
                <img className="z-10" src="images/section2/chat.png" alt="" />
              </div>
            </div>
            <div className="w-1/3 h-[100%]">
              <div className="h-[30%] 2xl:h-[90%] start-6 flex flex-col justify-center">
                <div className="relative -rotate-[15deg] h-[15%]">
                  <p
                    className="hidden lg:absolute  fill  -top-32"
                    data-text="GENOS"
                  >
                    GENOS
                  </p>
                </div>
                <div className="h-2/3 flex flex-col 2xl:ml-20 justify-start items-start">
                  <p className="hidden lg:block font-extrabold text-6xl 2xl:text-8xl mb-10">
                    CONNECT WALLET
                  </p>
                  <p className="h-48 w-[25rem] text-2xl text-white font-bold">
                    Participate in or Airdrop Participate in our Airdrop Pioneer
                    P
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </Tabs.Content>

        <Tabs.Content className="" value="characterTab1">
          <fieldset className="h-[100%] w-[100%] mx-auto flex justify-center">
            <div className="h-full w-1/3 flex gap-4 justify-center items-end">
              <div className="w-1/3 h-1/2 flex flex-col items-end gap-4"></div>
              <div className="flex items-end justify-end">
                <ImageTabs />
              </div>
            </div>
            <div className="w-1/3 relative">
              <div className="absolute">
                <img className="z-10" src="images/section2/chat.png" alt="" />
              </div>
            </div>
            <div className="w-1/3 h-[100%]">
              <div className="h-[90%] start-6 flex flex-col justify-center">
                <div className="relative -rotate-[15deg] h-[15%]">
                  <p className="fill absolute -top-32" data-text="GENOS">
                    HHHH
                  </p>
                </div>
                <div className="h-2/3 flex flex-col ml-20 justify-start items-start">
                  <p className="font-extrabold text-8xl mb-10">
                    CONNECT WALLET
                  </p>
                  <p className="h-48 w-[25rem] text-2xl text-white font-bold">
                    Participate in or Airdrop Participate in our Airdrop Pioneer
                    P
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default CharacterTabs;
