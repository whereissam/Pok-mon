import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

const CharacterTabs = () => {
  return (
    <>
      <Tabs.Root className="flex flex-col" defaultValue="characterTab0">
        <Tabs.Content className="" value="characterTab0">
          <fieldset className="w-full h-full flex justify-start">
            <img
              src="images/section2/videoAlt.png"
              className="w-8/12 object-cover"
              alt=""
            />
            <img
              className="z-10 absolute h-[350px] right-0 top-20"
              src="images/section2/chat.png"
              alt=""
            />
          </fieldset>
        </Tabs.Content>

        <Tabs.Content className="" value="characterTab1">
          <fieldset className="w-full h-full">
            <img
              src="images/section2/videoAlt1.png"
              className="w-2/12 object-cover"
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
          className="shrink-0 flex flex-col pl-10 gap-2 justify-center py-10"
          aria-label="your account"
        >
          <Tabs.Trigger className="h-[70px] w-[120px]" value="characterTab0">
            <img
              src="images/section2/leftTab0.png"
              className="object-cover h-[70px]"
              alt="left"
            />
          </Tabs.Trigger>
          <Tabs.Trigger className="h-[70px] w-[120px]" value="characterTab1">
            <img
              src="images/section2/leftTab0.png"
              className="object-cover h-[70px]"
              alt="left"
            />
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};

export default CharacterTabs;
