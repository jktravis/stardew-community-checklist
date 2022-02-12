import React from "react";
import styled from "@emotion/styled";
import Gathering from "./Gathering";
import { useCheckList } from "../context/CheckListContext";

const AnytimeStyle = styled("div")``;

function Anytime() {
  const context = useCheckList();
  const data = context.data.checkList.anytime;
  return (
    <AnytimeStyle>
      <h1>Anytime</h1>
      <Gathering label="Mining" data={data.mining} />
      <Gathering label="Fishing" data={data.fishing} />
      <Gathering label="Crab Pot" data={data.crabPot} />
      <Gathering label="Exotic Foraging" data={data.exoticForaging} />
      <Gathering label="Construction" data={data.construction} />
      <Gathering label="Animals" data={data.animals} />
      <Gathering label="Artisan" data={data.artisan} />
      <Gathering label="Bulletin Board" data={data.bulletinBoard} />
      <Gathering label="Vault" data={data.vault} />
    </AnytimeStyle>
  );
}

export default Anytime;
