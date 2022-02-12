import React from "react";
import styled from "@emotion/styled";

const QualityStyle = styled("div")`
  position: relative;

  .quality-icon {
    position: absolute;
    z-index: 10;
  }
`;

function Quality({ children }) {
  return (
    <QualityStyle>
      <img src="Gold_Quality_Icon.png" alt="Gold Quality" className="quality-icon" />
      {children}
    </QualityStyle>
  );
}

export default Quality;
