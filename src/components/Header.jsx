import React from 'react';

const Header = () => {
  return (
    <header className="text-center px-4 pb-contact bg-no-repeat bg-header bg-[position:left_-21.38rem_top_7.75rem,_right_-4.06rem_top_15.88rem]">
      <div className="flex flex-col items-center mb-10">
        <nav className="absolute top-5">
          <h1 className="text-2xl mb-5 leading-8">adamkeyes</h1>
          <div className="flex flex-row justify-between">
            <a href="">
              <img
                src="/images/icon-github.svg"
                alt="Adam Keyes GitHub Page Link"
                width={19.69}
                height={19.2}
              />
            </a>
            <a href="">
              <img
                src="/images/icon-frontend-mentor.svg"
                alt="Adam Keyes Frontend Mentor Page Link"
                width={19.68}
                height={17.6}
              />
            </a>
            <a href="">
              <img
                src="/images/icon-linkedin.svg"
                alt="Adam Keyes LinkedIn Page Link"
                width={19.2}
                height={19.2}
              />
            </a>
            <a href="">
              <img
                src="/images/icon-twitter.svg"
                alt="Adam Keyes Twitter Page Link"
                width={18.62}
                height={15.14}
              />
            </a>
          </div>
        </nav>
        <img
          src="/images/image-profile-mobile.webp"
          alt="adam keyes"
          width={174}
          height={383}
        />
      </div>
      <p className="text-40 mb-6 leading-10 font-bold">
        Nice to meet you! I'm{' '}
        <span className="underline decoration-green decoration-4">
          Adam Keyes
        </span>
        .
      </p>
      <p className="leading-26 text-lightGrey mb-6">
        Based in the UK, I&apos;m a front-end developer passionate about
        building accessible web apps that users love.
      </p>
      <a
        href=""
        className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
      >
        <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
          Contact Me
        </span>
      </a>
    </header>
  );
};

export default Header;
