import { NavLink } from "react-router-dom";
import navPanel from "../../dt/navPanel.json";
export default function NavPanel() {
  return (
    <nav>
      {navPanel.map((item) => (
        <NavLink to={item.pathRoute} key={item.id}>
          <div className="container_link">
            <img src={item.pathImg} alt={item.title} />
            <span>{item.title}</span>
          </div>
        </NavLink>
      ))}{" "}
    </nav>
  );
}
