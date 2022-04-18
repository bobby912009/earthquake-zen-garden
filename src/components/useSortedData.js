import { useState, useMemo } from "react";

/**
 * A custom hook used to sort the data in asc and desc orders
 *
 * @param {Array<Object>} data - the data that will be sorted
 * @example [{field: "My Field Value"}, {field: "My Field Value 2"}]
 * @param {Object} sortInfoSchem - the sort schema to use.
 * @default null
 * @example {field: "title", isAsc: false}
 * @returns the sorted items, the sorted information and a function to change the sort
 * @example {items, sortInfo, changeSortByField}
 */
export function useSortedData(data, sortInfoSchem = null) {
  const [sortInfo, setSortInfo] = useState(sortInfoSchem);

  // Sort the data via useMemo to help with time complexity
  const sortedData = useMemo(() => {
    let dataToSort = [...data];
    if (sortInfo !== null) {
      dataToSort.sort((a, b) => {
        let aProps = a.properties;
        let bProps = b.properties;
        if (aProps[sortInfo.field] < bProps[sortInfo.field]) {
          return sortInfo.isAsc ? -1 : 1;
        }
        if (aProps[sortInfo.field] > bProps[sortInfo.field]) {
          return sortInfo.isAsc ? 1 : -1;
        }
        return 0;
      });
      return dataToSort;
    }
  }, [data, sortInfo]);

  /**
   * Used as a way for other js files to change the sort from a parent
   * @param {String} field - the field to sort the data by
   */
  const changeSortByField = (field) => {
    setSortInfo({
      field,
      isAsc: !(sortInfo && sortInfo.field === field && sortInfo.isAsc),
    });
  };

  return { items: sortedData, sortInfo, changeSortByField };
}
