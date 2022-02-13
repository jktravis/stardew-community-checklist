import React from "react";
import Item from "./Item";
import Box from "../style/Box";
import styled from "@emotion/styled";

const GatheringStyle = styled("div")`
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;

function Gathering({ label, data = [] }) {
  return (
    <GatheringStyle>
      <h3>{label}</h3>
      <div className="images">
        {data.length ? (
          data.map((datum, idx) => {
            return <Item data={datum} key={`${datum.label}-${idx}`} />;
          })
        ) : (
          <Box>Nothing to do!</Box>
        )}
      </div>
    </GatheringStyle>
  );
}

export default Gathering;
