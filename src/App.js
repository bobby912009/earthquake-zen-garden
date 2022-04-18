import React from "react";
import Table from "./components/Table";
import FlexBox from "./components/FlexBox";
import Title from "./components/Title";
import { getFeaturesFromData } from "./utilities/real-helpers";
function App() {
  return (
    <div>
      <FlexBox>
        <Title>USGS All Earthquakes, Past</Title>
      </FlexBox>
      <FlexBox>
        <Table data={getFeaturesFromData()} />
      </FlexBox>
    </div>
  );
}

export default App;
