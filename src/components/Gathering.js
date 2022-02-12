import React from "react";
import Item from "./Item";
import Box from "../style/Box";

function Gathering({ label, data = [] }) {
  return (
    <div>
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
    </div>
  );
}

export default Gathering;
