import React from 'react';

const Projects = () => {
  return (
    <section className="px-4 sm:mb-28 sm:px-1875 xl:px-1031">
      <div className="flex justify-between items-center pt-20 border-solid border-0 border-t border-white mb-10 sm:border-0 sm:pt-0 sm:mb-375">
        <h2 className="text-40 tracking-minus2 leading-10 sm:text-72 sm:leading-7xl xl:text-55">
          Projects
        </h2>
        <a
          href=""
          className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
        >
          <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
            Contact Me
          </span>
        </a>
      </div>

      <ul
        role="list"
        className="pl-0 flex flex-col items-center sm:grid sm:grid-row-3 sm:grid-col-2 sm:gap-x-5 sm:gap-y-45 xl:gap-x-187"
      >
        <li
          role="listitem"
          className="mb-10 sm:col-end-2 sm:row-start-1 sm:mb-0 xl:relative"
        >
          <div className="max-w-sm xl:max-w-none relative">
            <picture>
              <source
                media="(min-width:1280px)"
                srcSet="/images/thumbnail-project-1-large.webp"
                alt="design portfolio project"
              />
              <source
                media="(max-width:1279px)"
                srcSet="/images/thumbnail-project-1-small.webp"
                alt="design portfolio project"
                width={342}
                height={253}
              />
              <img
                src="/images/thumbnail-project-1-small.webp"
                alt="design portfolio project"
                className="mb-5"
              />
            </picture>
            {/* Black screen on hover */}
            <div className="xl:w-full xl:h-full xl:absolute xl:top-0 xl:left-0 xl:bg-transparent xl:hover:bg-black xl:hover:bg-opacity-75 xl:z-5"></div>

            <div className="absolute -bottom-669 xl:flex xl:flex-col xl:items-center xl:text-center xl:gap-y-375 xl:z-10 xl:top-863 xl:left-1256 ">
              <a
                href=""
                className="relative pb-2.5 border-solid border-0 border-b-2 border-green mr-8 xl:mr-0"
              >
                <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
                  View Project
                </span>
              </a>
              <a
                href=""
                className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
              >
                <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
                  View Code
                </span>
              </a>
            </div>
          </div>
          <h3 className="uppercase text-2xl mb-3 sm:mb-0.44">
            Design Portfolio
          </h3>
          <p className="text-lightGrey flex mb-5 text-18">
            <span className="mr-5">HTML</span>
            <span>CSS</span>
          </p>
        </li>
        <li
          role="listitem"
          className="mb-10 sm:col-start-2 sm:row-start-1 sm:mb-0"
        >
          <picture className="max-w-sm xl:max-w-none">
            <source
              media="(min-width:1280px)"
              srcSet="/images/thumbnail-project-2-large.webp"
              alt="e-learning landing page"
            />
            <source
              media="(max-width:1279px)"
              srcSet="/images/thumbnail-project-2-small.webp"
              alt="e-learning landing page"
              width={342}
              height={253}
            />
            <img
              src="/images/thumbnail-project-2-small.webp"
              alt="e-learning landing page"
              className="mb-5"
            />
          </picture>
          <h3 className="text-2xl uppercase mb-3">e-learning landing page</h3>
          <p className="text-lightGrey flex mb-5  uppercase">
            <span className="mr-5  text-lg">HTML</span>
            <span className="text-lg">CSS</span>
          </p>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green mr-8"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Project
            </span>
          </a>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Code
            </span>
          </a>
        </li>
        <li
          role="listitem"
          className="mb-10 sm:col-start-1 sm:row-start-2 sm:mb-0"
        >
          <div className="max-w-sm">
            <img
              src="/images/thumbnail-project-3-small.webp"
              alt="design portfolio project"
              className="mb-5"
            />
          </div>
          <h3 className="uppercase text-2xl mb-3">Todo Web App</h3>
          <p className="text-lightGrey flex mb-5 uppercase">
            <span className="mr-5  text-lg">HTML</span>
            <span className="mr-5 text-lg">CSS</span>
            <span className="text-lg">Javascript</span>
          </p>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green mr-8"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Project
            </span>
          </a>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Code
            </span>
          </a>
        </li>
        <li
          role="listitem"
          className="mb-10 sm:col-start-2 sm:row-start-2 sm:mb-0"
        >
          <div className="max-w-sm">
            <img
              src="/images/thumbnail-project-4-small.webp"
              alt="design portfolio project"
              className="mb-5"
            />
          </div>
          <h3 className="uppercase text-2xl mb-3">entertainment web app</h3>
          <p className="text-lightGrey flex mb-5 uppercase">
            <span className="mr-5  text-lg">HTML</span>
            <span className="mr-5 text-lg">CSS</span>
            <span className="text-lg">Javascript</span>
          </p>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green mr-8"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Project
            </span>
          </a>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Code
            </span>
          </a>
        </li>
        <li role="listitem" className="mb-10 sm:mb-0">
          <div className="max-w-sm">
            <img
              src="/images/thumbnail-project-5-small.webp"
              alt="design portfolio project"
              className="mb-5"
            />
          </div>
          <h3 className="uppercase text-2xl mb-3">memory game</h3>
          <p className="text-lightGrey flex mb-5  uppercase">
            <span className="mr-5  text-lg">HTML</span>
            <span className="mr-5 text-lg">CSS</span>
            <span className="text-lg">Javascript</span>
          </p>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green mr-8"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Project
            </span>
          </a>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Code
            </span>
          </a>
        </li>
        <li role="listitem" className="mb-20 sm:mb-0">
          <div className="max-w-sm">
            <img
              src="/images/thumbnail-project-6-small.webp"
              alt="design portfolio project"
              className="mb-5"
            />
          </div>
          <h3 className="uppercase text-2xl mb-3">art gallery showcase</h3>
          <p className="text-lightGrey flex mb-5  uppercase">
            <span className="mr-5  text-lg">HTML</span>
            <span className="mr-5 text-lg">CSS</span>
            <span className="text-lg">Javascript</span>
          </p>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green mr-8"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Project
            </span>
          </a>
          <a
            href=""
            className="relative pb-2.5 border-solid border-0 border-b-2 border-green"
          >
            <span className="leading-26 font-bold uppercase text-white tracking-custom  hover:text-green">
              View Code
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
