import { Link, NavLink } from "react-router-dom";

const listMenu = [
  "counter",
  "login",
  "random-number",
  "note",
  "posts",
  "todo",
  "persons",
];

const Menu = () => {
  const listMenuLink = listMenu.map((textUrl) => {
    return (
      <Link key={textUrl} to={textUrl}>
        {textUrl}
      </Link>
    );
  });

  return (
    <>
      <nav>
        {listMenuLink}
        <NavLink to="." end>
          home
        </NavLink>
      </nav>
    </>
  );
};

export default Menu;
