import "./header.css";
import { ReactComponent as MainLogo } from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <MainLogo className="main-logo" />
      </div>
    </header>
  );
};

export default Header;
