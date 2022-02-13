import React, { useState } from "react";
import Item from "./Item";
import Box from "../style/Box";
import styled from "@emotion/styled";
import { Accordion } from "react-bootstrap";

const GatheringStyle = styled("div")`
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;

  .accordion-button,
  .accordion-item {
    background-color: transparent !important;
    border: none !important;
  }

  .accordion-button {
    background-color: transparent !important;
    border-bottom: none !important;
    width: unset;
    box-shadow: unset;
    &::after {
      margin-left: 0.5rem;
    }
  }
`;

function Gathering({ label, data = [], expandAll }) {
  return (
    <GatheringStyle>
      <Accordion defaultActiveKey={expandAll ? 0 : undefined} alwaysOpen flush>
        <Accordion.Item eventKey={0}>
          <Accordion.Header>
            <h3>{label}</h3>
          </Accordion.Header>
          <Accordion.Body>
            <div className="images">
              {data.length ? (
                data.map((datum, idx) => {
                  return <Item data={datum} key={`${datum.label}-${idx}`} />;
                })
              ) : (
                <Box>Nothing to do!</Box>
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </GatheringStyle>
  );
}

export default Gathering;
