import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__Left">
        <img
          className="header__logo"
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" />
        <HeaderOption title="My Network" />
      </div>
    </div>
  );
}

export default Header;
