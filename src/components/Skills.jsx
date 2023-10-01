import React from 'react';
import VisuallyHidden from './styles/VisuallyHidden';

const Skills = () => {
  return (
    <section className="px-4">
      <h2 className="">
        <VisuallyHidden>Skills</VisuallyHidden>
      </h2>
      <ul
        role="list"
        className="mb-10 pt-10 pl-0 text-center border-solid border-0 border-t border-white"
      >
        <li role="listitem" className="mb-6">
          <span className="text-32 font-bold leading-10 tracking-minus">
            HTML
          </span>
          <p className="leading-26">4 Years Experience</p>
        </li>
        <li role="listitem" className="mb-6">
          <span className="text-32 font-bold leading-10 tracking-minus">
            CSS
          </span>
          <p className="leading-26">4 Years Experience</p>
        </li>
        <li role="listitem" className="mb-6">
          <span className="text-32 font-bold leading-10 tracking-minus">
            JavaScript
          </span>
          <p className="leading-26">4 Years Experience</p>
        </li>
        <li role="listitem" className="mb-6">
          <span className="text-32 font-bold leading-10 tracking-minus">
            Accessibility
          </span>
          <p className="leading-26">4 Years Experience</p>
        </li>
        <li role="listitem" className="mb-6">
          <span className="text-32 font-bold leading-10 tracking-minus">
            React
          </span>
          <p className="leading-26">3 Years Experience</p>
        </li>
        <li role="listitem">
          <span className="text-32 font-bold leading-10 tracking-minus">
            Sass
          </span>
          <p className="leading-26">3 Years Experience</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
