import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-grey px-4 pb-375">
      <h2 className="pt-39 text-center border-solid border-0 border-t border-lightGrey mb-5">
        adamkeyes
      </h2>
      <div className="flex flex-row justify-center">
        <a href="" className="mr-25">
          <img
            src="/images/icon-github.svg"
            alt="Adam Keyes GitHub Page Link"
            width={19.69}
            height={19.2}
          />
        </a>
        <a href="" className="mr-25">
          <img
            src="/images/icon-frontend-mentor.svg"
            alt="Adam Keyes Frontend Mentor Page Link"
            width={19.68}
            height={17.6}
          />
        </a>
        <a href="" className="mr-25">
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
    </footer>
  );
};

export default Footer;
