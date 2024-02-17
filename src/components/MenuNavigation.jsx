import React, { useState } from 'react';

import Button from './Button';

const MenuNavigation = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'BLOCKCHAIN', link: '#BLOCKCHAIN' },
    { name: 'ROADMAP', link: '#ROADMAP' },
    { name: 'COMMUNITY', link: '#COMMUNITY' },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-30">
      <ul className="flex justify-between items-center bg-black px-7 py-4 md:px-10 transition-all duration-500 ease-in">
        {/* Hamburger icon */}
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <button className="text-white hover:text-gray-400 duration-500">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your hamburger icon SVG paths */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </svg>
          </button>
        </div>

        {/* Links */}
        {/* <div className="block md:flex justify-evenly flex-1">
      {Links.map((link) => (
        <a
          key={link.name}
          href={link.link}
          className="text-white hover:text-gray-400 duration-500 mx-8"
        >
          {link.name}
        </a>
      ))}
    </div> */}

        <div
          className={`md:flex md:items-center md:justify-evenly md:pb-0 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          <div className="relative flex flex-wrap justify-around md:justify-evenly">
            {Links.map(link => (
              <a
                key={link.name}
                href={link.link}
                className="text-white hover:text-gray-400 duration-500 mx-32 py-4 md:mx-8"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Sign In button */}
        <Button className="hidden md:block w-1/10 text-[#F7BC1A]">
          SIGN IN
        </Button>
      </ul>
    </div>
  );
};

export default MenuNavigation;
