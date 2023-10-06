import React from 'react';
import VisuallyHidden from './styles/VisuallyHidden';
import SkillTitle from './styles/SkillTitle';

const Skills = () => {
  return (
    <section className="px-4 sm:px-1875">
      <h2 className="">
        <VisuallyHidden>Skills</VisuallyHidden>
      </h2>
      <ul
        role="list"
        className="pb-10 pt-10 pl-0 text-center border-solid border-0 border-t border-white sm:grid sm:grid-col-2  sm:grid-row-3 sm:justify-items-start sm:text-left sm:pt-325 sm:pb-625"
      >
        <li role="listitem" className="mb-6 sm:col-end-2 sm:row-end-2 ">
          <SkillTitle>HTML</SkillTitle>
          <p className="leading-26 sm:text-18 sm:leading-175">
            4 Years Experience
          </p>
        </li>
        <li role="listitem" className="mb-6 sm:col-start-2 sm:row-end-2">
          <SkillTitle>CSS</SkillTitle>
          <p className="leading-26 sm:text-18 sm:leading-175">
            4 Years Experience
          </p>
        </li>
        <li role="listitem" className="mb-6 sm:row-start-2 sm:col-end-2">
          <SkillTitle>JavaScript</SkillTitle>
          <p className="leading-26 sm:text-18 sm:leading-175">
            4 Years Experience
          </p>
        </li>
        <li role="listitem" className="mb-6 sm:row-start-2 sm: col-start-2">
          <SkillTitle>Accessibility</SkillTitle>
          <p className="leading-26 sm:text-18 sm:leading-175">
            4 Years Experience
          </p>
        </li>
        <li role="listitem" className="mb-6 sm:row-start-3 sm:col-end-2">
          <SkillTitle>React</SkillTitle>
          <p className="leading-26 sm:text-18 sm:leading-175">
            3 Years Experience
          </p>
        </li>
        <li role="listitem" className="sm:col-start-2 sm:row-start-3">
          <SkillTitle>Sass</SkillTitle>
          <p className="leading-26 sm:text-18 sm:leading-175">
            3 Years Experience
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
