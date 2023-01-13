import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to={"/articles"}>
        <h1>KA-News</h1>
      </Link>
    </div>
  );
}

export default Header;
