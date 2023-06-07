
const NavItem = ({ text, href, active }) => {
  return (
    <a href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </a>
  );
};

export default NavItem;