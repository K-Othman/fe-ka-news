import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header ">
      <div className="container h-text">
        <h1>KANEWS</h1>
        <Link to={"/articles"}>
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
