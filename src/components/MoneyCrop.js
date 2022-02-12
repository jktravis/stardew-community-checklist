import React from "react";
import styled from "@emotion/styled";
import Box from "../style/Box";

const MoneyCropStyle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h2 {
    margin: 0;
  }
`;

function MoneyCrop({ data }) {
  return (
    <MoneyCropStyle>
      <h2>Money Crop</h2>
      <div className="crops">
        {data.map((datum, idx) => {
          const { wikiLink, image, label } = datum;
          return (
            <a href={wikiLink} key={`${label}-${idx}`} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={label} />
            </a>
          );
        })}
      </div>
    </MoneyCropStyle>
  );
}

export default MoneyCrop;
