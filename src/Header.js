import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

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
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          title="Me"
          avatar="https://media-exp3.licdn.com/dms/image/C4D03AQH_7IhaTwnACw/profile-displayphoto-shrink_800_800/0/1610539044747?e=1630540800&v=beta&t=nJcfu97eU9-BsIbxszo5O-Mi2o-hQlu1unxm4BQcRJU"
        />
      </div>
    </div>
  );
}

export default Header;
