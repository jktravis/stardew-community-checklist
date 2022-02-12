import React from "react";
import MoneyCrop from "./MoneyCrop";
import Gathering from "./Gathering";
import { useCheckList } from "../context/CheckListContext";
import startCase from "lodash.startcase";

function Season({ season }) {
  const context = useCheckList();
  const data = context.data.checkList[season];
  return (
    <div className="season">
      <h1>{startCase(season)}</h1>
      <MoneyCrop data={data.moneyCrop} />

      <Gathering label="Farming" data={data.farming} />
      <Gathering label="Foraging" data={data.foraging} />
      <Gathering label="Fishing" data={data.fishing} />
      <Gathering label="Other" data={data.other} />
    </div>
  );
}

export default Season;
