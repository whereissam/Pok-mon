import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import ImageTabs from './tabs';

const CharacterTabs = () => {
  return (
    <>
      <Tabs.Root
        className="flex bg-blue-800 justify-center gap-10"
        defaultValue="characterTab0"
      >
        <Tabs.List
          className="shrink-0 flex mr-[20px] flex-col gap-4 "
          aria-label="your account"
        >
          <Tabs.Trigger className="h-[86px] w-[130px]" value="characterTab0">
            {/* <img
              className="w-full object-cover"
              src="../../assets/section2/leftTab0.png"
              alt="Girl in a jacket"
            /> */}
            <img
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps9kizhkhpsqnqw29v3p3zy0ehrvsv8yq6af36550f-554c-4692-bc2a-ed8ecdb4b8ab"
              alt="left"
            />
            {/* <img src="../../assets/section2/leftTab1.png" alt="right" /> */}
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-yellow-900 h-[86px] w-[130px]"
            value="characterTab1"
          >
            <img
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/pstfs95klhctzgi74q8r0jl35nhchbz017001095c4-ee65-44ba-a464-84a8a3593595"
              alt=""
            />
            {/* Password */}
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="bg-blue-400" value="characterTab0">
          <fieldset className="h-[100%] w-[100%] mx-auto flex justify-center">
            <div className="bg-red-400 h-full w-1/3 flex gap-4 justify-center">
              <div className="w-1/3 h-1/2 flex flex-col gap-4"></div>
              <div>
                <ImageTabs />
              </div>
            </div>
            <div className="w-1/3 relative">
              <div className="absolute">
                <img
                  className="z-10"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps0qnq2av2yx5a2z41a509j6dnhlybxy4gha33822d0-40c1-4b38-a717-281b51c06174"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-red-200 w-1/3 h-[100%]">
              <div className="h-[90%] start-6 flex flex-col justify-center">
                <div className="relative -rotate-[15deg] h-[15%]">
                  <p className="fill absolute -top-32" data-text="GENOS">
                    GENOS
                  </p>
                </div>
                <div className="h-2/3 flex flex-col ml-20 justify-start items-start">
                  <p className="font-extrabold text-7xl mb-10">
                    CONNECT WALLET
                  </p>
                  <p className="h-20 text-2xl">
                    Participate in or Airdrop Participate in our Airdrop Pioneer
                    P
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </Tabs.Content>

        <Tabs.Content className="mr-[30px]" value="characterTab1">
          <fieldset className="h-[100%] w-[80%] mx-auto flex justify-center">
            <div className="bg-red-400 h-full w-1/3 flex gap-4 justify-center">
              <div className="w-1/3 h-1/2 flex flex-col gap-4"></div>
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
                  <p className="font-extrabold text-7xl mb-10">
                    CONNECT WALLET
                  </p>
                  <p className="h-20 text-2xl">
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
