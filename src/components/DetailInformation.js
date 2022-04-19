import React from "react";
import PropTypes from "prop-types";
import "./detail-informaiton.css";

/**
 * Used to show detailed information for a paritcular piece of a JSON object.
 * @param {Map} map - the map that contains a key for each item to be shown along with a value to display to the user
 * @example {title: "Title"}
 * @param {Object} data - an object containing a field and value
 * @returns <DetailsInformation />
 */
function DetailInformation({ map, data }) {
  /**
   * A helper function used to generate a list of rows to render
   * @param {Map} map - field value key pair
   * @returns <GeneratedTRFromMap />
   */
  function GeneratedTRFromMap({ map, data }) {
    // Store the generated components
    const comps = [];
    if (map && data) {
      for (let key in map) {
        comps.push(
          <tr key={key}>
            <td className="left-items">{map[key]}</td>
            <td className="right-items">{data[key]}</td>
          </tr>
        );
      }
    }
    return comps;
  }
  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <GeneratedTRFromMap map={map} data={data} />
      </tbody>
    </table>
  );
}

DetailInformation.propTypes = {
  map: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

// Export it
export default DetailInformation;
