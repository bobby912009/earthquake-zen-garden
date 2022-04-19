import React from "react";
import PropTypes from "prop-types";
import { getDateFormatFromMills } from "../utilities/real-helpers";
import { Link, Outlet } from "react-router-dom";
import useSortedData from "../hooks/useSortedData";
import "./css/table.css";

/**
 *  A general re-usable table for our application. Has the ability to sort columns.
 * @param {Array} data the data to be displayed in the table
 * @returns element <Table>
 */
function Table({ data }) {
  // Creates the map to be used in the column's of the table
  const map = {
    title: "Title",
    mag: "Magnitude",
    time: "Time",
  };

  // Use our custom hook to sort the data and retrieve the function for chaning sort
  const { items, sortInfo, changeSortByField } = useSortedData(data, {
    field: "time",
    isAsc: true,
  });

  /**
   * A helper function used to determine what class to generate if the criteria is met.
   * @param {String} field - specifies the field's key
   * @param {Object} sortInfo - the sorting info about obtain by the @see useSortedData hook
   * @returns an intended className string if criteria is met, empty string if not
   */
  function indicateArrow(field, sortInfo) {
    if (sortInfo.field === field) {
      return `arrow ${sortInfo.isAsc ? "up" : "down"}`;
    }
    return "";
  }

  /**
   * Generates a list of rows from an list of objects for a table.
   * @param {Object} map - a map of field keys, used to map reference user readable values.
   * @example {myTitle : "My Title"}
   * @param {Array} data - an array of data objects. These objects should have fields relative to the @see map above
   * @example [{myTitle: "something"}]
   * @returns element <GeneratedTRFromArray />
   */
  function GeneratedTRFromArray({ map, data }) {
    const comps = [];
    if (map && data) {
      data.forEach((item) => {
        comps.push(
          <tr key={item.id}>
            <td>
              <Link to={`/${item.id}`} key={item.id}>
                {item.properties.title}
              </Link>
            </td>
            <td className="middle">{item.properties.mag}</td>
            <td>{getDateFormatFromMills(item.properties.time)}</td>
          </tr>
        );
      });
    }
    return comps;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th onClick={() => changeSortByField("title")}>
              {map["title"]}{" "}
              <i className={indicateArrow("title", sortInfo)}></i>
            </th>
            <th onClick={() => changeSortByField("mag")}>
              {map["mag"]} <i className={indicateArrow("mag", sortInfo)}></i>
            </th>
            <th onClick={() => changeSortByField("time")}>
              {map["time"]} <i className={indicateArrow("time", sortInfo)}></i>
            </th>
          </tr>
          <GeneratedTRFromArray map={map} data={items} />
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}

// Helps to ensure devlopers use the correct type
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

// Export the table
export default Table;
