import React from "react";
import PropTypes from "prop-types";
import "./real-toolbar.css";
import {
  getSiteInfoFromData,
  getUserProfileFromData,
} from "../utilities/real-helpers";
import { Link } from "react-router-dom";
import { MAIN_URL, USER_PROFILE_URL } from "../utilities/real-constants";

/**
 * For use as the web appliction's main toolbar.
 * @param children - currently used to get children elements
 * @returns <Toolbar />
 */
function Toolbar({ children }) {
  // Gets the site's info
  const siteData = getSiteInfoFromData();

  // Gets the user's profile information
  const userProfile = getUserProfileFromData();

  /**
   * Creates toolbar links
   * @returns <Bar />
   */
  function Bar() {
    return (
      <div className="real-toolbar">
        <div className="left-item">
          <Link to={MAIN_URL}>
            <img
              src={siteData.logoImage}
              alt="Realtor Logo, click to go to main screen"
            />
          </Link>
        </div>
        <div className="center-item">Earthquake Zen Garden</div>
        <div className="right-item">
          <Link
            to={USER_PROFILE_URL}
          >{`Welcome ${userProfile.firstName}`}</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Bar />
      {children}
    </>
  );
}

// At least one element is required
Toolbar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Toolbar;
