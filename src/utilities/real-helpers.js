import { REAL_DEAFUALT_DATE_FORMAT } from "./real-constants";
import dateFormat from "dateformat";
import realData from "../data/real.json";

/**
 * A helper function Used to get a date format from an unix epoch milliseconds
 * @param {Number} mills - the unix epoch milliseconds
 * @param {String} format - the date format to convert the mills to
 * @default REAL_DEAFUALT_DATE_FORMAT
 * @returns
 */
export function getDateFormatFromMills(
  mills,
  format = REAL_DEAFUALT_DATE_FORMAT
) {
  return dateFormat(new Date(mills), format);
}

/**
 * Gets a list of features from the supplied data
 * @returns A list of features
 */
export function getFeaturesFromData() {
  return realData.data.features;
}

/**
 * Gets the user's profile data information
 * @returns the user's profile data object
 */
export function getUserProfileFromData() {
  return realData.profile;
}

/**
 * Gets the website's site information from data
 * @returns the website's info
 */
export function getSiteInfoFromData() {
  return realData.site;
}
