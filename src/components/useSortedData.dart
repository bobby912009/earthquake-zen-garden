function useSortedData(data, config = null) {

const [sortInfo, setSortInfo] = useState({field: "mag", isAsc: true});
useMemo(() => {
  let dataToSort = [...data];
  console.log("changing..");
  console.log(data)
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
  }
  console.log("set")
  console.log(dataToSort);

  setUpdatedData(dataToSort);
}, [data, sortInfo]);

}