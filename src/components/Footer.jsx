import React from 'react';
import NavIcons from './NavIcons';

const Footer = () => {
  return (
    <footer className="bg-grey px-4 sm:px-1875">
      <nav className="border-solid border-0 border-t border-lightGrey pb-375 sm:flex sm:justify-between sm:items-center sm:pt-187 sm:pb-10">
        <h2 className="pt-39 text-center mb-5 sm:pt-0 sm:mb-0 sm:text-32 sm:leading-8">
          adamkeyes
        </h2>
        <NavIcons />
      </nav>
    </footer>
  );
};

export default Footer;
