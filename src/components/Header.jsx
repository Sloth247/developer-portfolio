import React from 'react';
import NavIcons from './NavIcons';

const Header = () => {
  return (
    <header className="text-center px-4 pb-contact bg-no-repeat bg-header bg-[position:left_-21.38rem_top_7.75rem,_right_-4.06rem_top_15.88rem] sm:px-1875 sm:pt-1875 sm:text-left sm:pb-3625">
      <div className="flex flex-col items-center mb-10 sm:block">
        <nav className="absolute top-5 sm:static sm:top-0 sm:flex sm:justify-between sm:items-center">
          <h1 className="text-2xl mb-5 leading-8 sm:mb-0 sm:text-32">
            adamkeyes
          </h1>
          <NavIcons />
        </nav>
        <picture className="sm:absolute sm:right-0 sm:top-0 sm:-z-10">
          <source
            media="(min-width:640px)"
            srcSet="/images/image-profile-tablet.webp"
            width={322}
            height={600}
          />
          <source
            media="(max-width:639px)"
            srcSet="/images/image-profile-mobile.webp"
            width={174}
            height={383}
          />
          <img src="/images/image-profile-mobile.webp" alt="adam keyes" />
        </picture>
      </div>
      <div className="sm:max-w-445">
        <p className="text-40 mb-6 leading-10 font-bold sm:mt-contact  sm:leading-7xl sm:text-72 sm:tracking-minus3 sm:mb-375">
          Nice to meet you! I'm{' '}
          <span className="underline decoration-green decoration-4">
            Adam Keyes
          </span>
          .
        </p>
        <p className="leading-26 text-lightGrey mb-6 sm:text-18 sm:mb-212 sm:leading-175">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <a
          href=""
          className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
        >
          <span className="leading-26 font-bold uppercase text-white tracking-custom hover:text-green">
            Contact Me
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
