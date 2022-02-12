import React, { useContext, useEffect, useMemo, useState } from "react";
import checkListData from "../checkListData";
import { getCheckList, saveCheckList } from "../services/CheckListService";
import errorHandler from "../utils/errorHandler";

const CheckListContext = React.createContext({});

function CheckListContextProvider({ children }) {
  const [data, setData] = useState(checkListData);

  useEffect(() => {
    getCheckList().then(setData).catch(errorHandler);
  }, []);

  useEffect(() => {
    saveCheckList(data).catch(errorHandler);
  }, [data]);

  const value = useMemo(() => {
    return { data, setData };
  }, [data]);

  return <CheckListContext.Provider value={value}>{children}</CheckListContext.Provider>;
}

function useCheckList() {
  return useContext(CheckListContext);
}

export { CheckListContext, useCheckList };

export default CheckListContextProvider;
