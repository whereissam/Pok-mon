import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

const CharacterTabs = () => {
  return (
    <>
      <Tabs.Root className="flex flex-col pl-10" defaultValue="characterTab0">
        <Tabs.Content className="" value="characterTab0">
          <fieldset className="w-full h-full">
            <img
              src="images/section2/videoAlt.png"
              className="w-8/12 object-cover"
              alt=""
            />
            <img
              className="z-10 absolute h-[300px] right-0 top-20"
              src="images/section2/chat.png"
              alt=""
            />
          </fieldset>
        </Tabs.Content>

        <Tabs.Content className="" value="characterTab1">
          <fieldset className="w-full h-full">
            <img
              src="images/section2/videoAlt.png"
              className="w-8/12 object-cover"
              alt=""
            />
            <img
              className="z-10 absolute h-[300px] right-0 top-20"
              src="images/section2/chat.png"
              alt=""
            />
          </fieldset>
        </Tabs.Content>

        <Tabs.List
          className="shrink-0 flex flex-col gap-10 justify-center py-12"
          aria-label="your account"
        >
          <Tabs.Trigger className="h-[50px] w-[120px]" value="characterTab0">
            <img src="images/section2/leftTab0.png" alt="left" />
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-yellow-900 h-[50px] w-[120px]"
            value="characterTab1"
          >
            <img src="images/section2/leftTab1.png" alt="" />
            {/* Password */}
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};

export default CharacterTabs;
