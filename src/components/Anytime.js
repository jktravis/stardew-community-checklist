import React, { useState } from "react";
import styled from "@emotion/styled";
import Gathering from "./Gathering";
import { useCheckList } from "../context/CheckListContext";
import { Button } from "react-bootstrap";
import * as R from "ramda";
import ExpandButtonStyle from "../style/ExpandButton";

const AnytimeStyle = styled("div")``;

function Anytime() {
  const [expandAll, setExpandAll] = useState(true);
  const context = useCheckList();
  const data = context.data.checkList.anytime;
  return (
    <AnytimeStyle>
      <h1>Anytime</h1>
      <ExpandButtonStyle>
        <Button variant="outline-dark" onClick={() => setExpandAll(R.not)}>
          {expandAll ? "Collapse" : "Expand"} All
        </Button>
      </ExpandButtonStyle>

      <Gathering label="Mining" key={`${expandAll}-Mining`} expandAll={expandAll} data={data.mining} />
      <Gathering label="Fishing" key={`${expandAll}-Fishing`} expandAll={expandAll} data={data.fishing} />
      <Gathering label="Crab Pot" key={`${expandAll}-Crab Pot`} expandAll={expandAll} data={data.crabPot} />
      <Gathering
        label="Exotic Foraging"
        key={`${expandAll}-Exotic Foraging`}
        expandAll={expandAll}
        data={data.exoticForaging}
      />
      <Gathering
        label="Construction"
        key={`${expandAll}-Construction`}
        expandAll={expandAll}
        data={data.construction}
      />
      <Gathering label="Animals" key={`${expandAll}-Animals`} expandAll={expandAll} data={data.animals} />
      <Gathering label="Artisan" key={`${expandAll}-Artisan`} expandAll={expandAll} data={data.artisan} />
      <Gathering
        label="Bulletin Board"
        key={`${expandAll}-Bulletin Board`}
        expandAll={expandAll}
        data={data.bulletinBoard}
      />
      <Gathering label="Vault" key={`${expandAll}-Vault`} expandAll={expandAll} data={data.vault} />
    </AnytimeStyle>
  );
}

export default Anytime;
