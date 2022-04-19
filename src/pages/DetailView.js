import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailInformation from "../components/DetailInformation";
import Title from "../components/Title";
import FlexBox from "../components/FlexBox";
import useFeatureFromId from "../hooks/useFeatureFromId";
/**
 * A detail view for the information being displayed for the feature data
 * @returns  <DetailView />
 */
export default function DetailView() {
  // Uses the param hook to retrieve the query params in the url
  let params = useParams();
  const [id] = useState(params.id);
  const { featureFromId } = useFeatureFromId(id);

  const [detailData, setDetailData] = useState(null);

  // Create the map for displaying the details view items
  const map = {
    title: "Title",
    mag: "Magnitude",
    time: "Time",
    status: "Status",
    tsunami: "Tsunami",
    type: "Type",
  };

  // Triggered when the id is changed in the query param
  useEffect(() => {
    setDetailData(featureFromId.properties);
  }, [id]);

  return (
    <>
      <FlexBox>
        <Title>{detailData ? detailData.title : "No Title"}</Title>
      </FlexBox>
      <FlexBox>
        <DetailInformation map={map} data={detailData} />
      </FlexBox>
    </>
  );
}
