import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Season from "./Season";
import Anytime from "./Anytime";
import { useCheckList } from "../context/CheckListContext";
import * as R from "ramda";

function Checklist() {
  const context = useCheckList();

  const handleSelect = (key) => {
    context.setData(R.set(R.lensProp("currentTab"), key));
  };

  return (
    <div className="checklist">
      <Tabs defaultActiveKey="Spring" transition activeKey={context.data.currentTab} onSelect={handleSelect} fill>
        <Tab title="Spring" eventKey="spring">
          <Season season="spring" />
        </Tab>
        <Tab title="Summer" eventKey="summer">
          <Season season="summer" />
        </Tab>
        <Tab title="Fall" eventKey="fall">
          <Season season="fall" />
        </Tab>
        <Tab title="Winter" eventKey="winter">
          <Season season="winter" />
        </Tab>
        <Tab title="Anytime" eventKey="anytime">
          <Anytime />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Checklist;
