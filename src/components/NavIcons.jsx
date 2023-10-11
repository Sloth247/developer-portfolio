import IconGithub from './icons/IconGithub';
import IconLinkedin from './icons/IconLinkedin';
import IconFem from './icons/IconFem';
import IconTwitter from './icons/IconTwitter';

const NavIcons = () => {
  return (
    <ul
      role="list"
      className="flex justify-center gap-25 pl-0 sm:gap-8 xl:pr-184"
    >
      <li role="list-item">
        <a href="">
          <IconGithub />
        </a>
      </li>
      <li>
        <a href="">
          <IconFem />
        </a>
      </li>
      <li>
        <a href="">
          <IconLinkedin />
        </a>
      </li>
      <li>
        <a href="">
          <IconTwitter />
        </a>
      </li>
    </ul>
  );
};

export default NavIcons;
