import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1506875644286-0fa3dc4df91f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Fredrik Fordelsen</h2>
        <h4>fredrikf2000@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,654</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,746</p>
        </div>
      </div>

      <div className="sidebar__button">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
