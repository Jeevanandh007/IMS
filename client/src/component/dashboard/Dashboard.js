import React from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";

import Settings from "./user/Settings";
import { Items } from "./Items";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const makeFirstLetterCapital = (str) => {
    const withoutFirstLetter = str.substring(1);
    const updated = str.charAt(0).toUpperCase().concat(withoutFirstLetter);

    return updated;
  };

  console.log("auth", auth);

  return auth.isAuthenticated ? (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar__welcome">
          Welcome, {makeFirstLetterCapital(auth.user.username)}!
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/dashboard">
              {/* <BoxImg fill="#eee" /> */}
              <span>Items</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/dashboard/settings">
              <span>Settings</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <button
              className="sidebar__logout"
              onClick={() => dispatch(logout())}
            >
              <span>Log out</span>
            </button>
          </li>
        </ul>
        <div className="copyright">
          &copy; 2024 Inventory Management App by Jeevanandh
        </div>
      </div>
      <div className="main">
        <Switch>
          <Route path="/dashboard/settings" render={() => <Settings />} />
          <Route path="/dashboard" render={() => <Items />} />
        </Switch>
      </div>
    </div>
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
};
export default Dashboard;
