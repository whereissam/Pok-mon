import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

const ImageTabs = () => (
  <Tabs.Root
    className="flex flex-col w-[450px] shadow-blackA2"
    defaultValue="tab1"
  >
    <Tabs.Content
      className="grow rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab0"
    >
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <iframe
          width="448"
          height="252"
          // width="112"
          // height="63"
          src="https://www.youtube.com/embed/Av_ap5UDOAE?si=6hRK11n6TwjRRsP4&autoplay=1&mute=1&loop=1&playlist=Av_ap5UDOAE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </fieldset>
    </Tabs.Content>
    <Tabs.Content
      className="grow rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <iframe
          width="421"
          height="249s"
          src="https://www.youtube.com/embed/Av_ap5UDOAE?si=6hRK11n6TwjRRsP4&autoplay=1&mute=1&loop=1&playlist=Av_ap5UDOAE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </fieldset>
    </Tabs.Content>
    <Tabs.List className="shrink-0 flex gap-4" aria-label="Manage your account">
      <Tabs.Trigger
        className="bg-white hover:border-red-600 hover:border-4 w-16 h-16 rounded-full flex justify-center items-center"
        value="tab0"
      >
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psprkpzeh9belq0rpqbi3r6kzlqfqtmj0ma7c4beadc-ed60-4ecb-bbbe-c88951113743"
          alt=""
        />
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white hover:border-red-600 hover:border-4 w-16 h-16 rounded-full flex justify-center items-center"
        value="tab1"
      >
        <img
          className="image_7"
          src={
            'https://lanhu.oss-cn-beijing.aliyuncs.com/psfaub83es715dx1unddvgyqbq6yggemy0fde4a4780-bc06-4b99-b12b-d303ca761a0f'
          }
        />
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white hover:border-red-600 hover:border-4 w-16 h-16 rounded-full flex justify-center items-center"
        value="tab2"
      >
        <img
          className="image_8"
          src={
            'https://lanhu.oss-cn-beijing.aliyuncs.com/pshv925e82niurwn21489bi9pj6zmrwh9f965d5942e-a4b8-4034-8573-e7e8e00badf2'
          }
        />
      </Tabs.Trigger>
    </Tabs.List>
    {/* <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >

    </Tabs.Content> */}
  </Tabs.Root>
);

export default ImageTabs;
