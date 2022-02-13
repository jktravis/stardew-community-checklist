import React, { useState } from "react";
import MoneyCrop from "./MoneyCrop";
import Gathering from "./Gathering";
import { useCheckList } from "../context/CheckListContext";
import startCase from "lodash.startcase";
import { Button } from "react-bootstrap";
import * as R from "ramda";
import ExpandButtonStyle from "../style/ExpandButton";

function Season({ season }) {
  const [expandAll, setExpandAll] = useState(true);

  const context = useCheckList();
  const data = context.data.checkList[season];
  return (
    <div className="season">
      <h1>{startCase(season)}</h1>

      <MoneyCrop data={data.moneyCrop} />

      <ExpandButtonStyle>
        <Button variant="outline-dark" onClick={() => setExpandAll(R.not)}>
          {expandAll ? "Collapse" : "Expand"} All
        </Button>
      </ExpandButtonStyle>

      <Gathering label="Farming" data={data.farming} key={`${expandAll}-farming`} expandAll={expandAll} />
      <Gathering label="Foraging" data={data.foraging} key={`${expandAll}-foraging`} expandAll={expandAll} />
      <Gathering label="Fishing" data={data.fishing} key={`${expandAll}-fishing`} expandAll={expandAll} />
      <Gathering label="Other" data={data.other} key={`${expandAll}-other`} expandAll={expandAll} />
    </div>
  );
}

export default Season;
