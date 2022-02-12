import checkListData from "../checkListData";
import * as R from "ramda";

const STORAGE_PREFIX = "sdv_checklist";

function getCheckList() {
  return new Promise((resolve, reject) => {
    try {
      const checklist = localStorage.getItem(STORAGE_PREFIX);

      if (checklist) {
        return resolve(JSON.parse(checklist));
      }

      return resolve(saveCheckList(checkListData).then(R.always(checkListData)));
    } catch (error) {
      reject(error);
    }
  });
}

function saveCheckList(checklist) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(STORAGE_PREFIX, JSON.stringify(checklist));
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

export { getCheckList, saveCheckList };
