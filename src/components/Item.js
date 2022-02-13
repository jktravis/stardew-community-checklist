import React from "react";
import { Form } from "react-bootstrap";
import styled from "@emotion/styled";
import Box from "../style/Box";
import Quality from "./Quality";
import { useCheckList } from "../context/CheckListContext";
import * as R from "ramda";

const ItemStyle = styled(Box)`
  .form-check-label {
    display: flex;
    align-items: center;
  }

  img {
    height: 2rem;
    margin-left: 0.5rem;
  }

  .label {
    margin-left: 0.5rem;
  }

  .count {
    margin-left: 0.25rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

function Item({ data }) {
  const context = useCheckList();

  const { image, label, wikiLink, quality, count, completed, season, section } = data;

  const handleChange = () => {
    const sectionLens = R.lensPath(["checkList", season, section]);
    const completedLens = R.lensProp("completed");

    context.setData((checklist) => {
      const idx = R.compose(
        R.findIndex(R.allPass([R.propEq("label", label), R.propEq("count", count), R.propEq("quality", quality)])),
        R.view(sectionLens),
      )(checklist);

      if (idx > -1) {
        const idxLens = R.lensIndex(idx);
        return R.over(R.compose(sectionLens, idxLens, completedLens), R.not)(checklist);
      }
    });
  };

  return (
    <ItemStyle completed={completed}>
      <Form.Check type="checkbox">
        <Form.Check.Label>
          <Form.Check.Input type="checkbox" checked={completed} onChange={handleChange} />
          {quality ? (
            <Quality>
              <img src={`${process.env.PUBLIC_URL}/${image}`} alt={label} />
            </Quality>
          ) : (
            <img src={`${process.env.PUBLIC_URL}/${image}`} alt={label} />
          )}
          <a href={wikiLink} target="_blank" rel="noopener noreferrer" className="label">
            {label}
          </a>
          {count > 1 ? <span className="count">{`x${count}`}</span> : null}
        </Form.Check.Label>
      </Form.Check>
    </ItemStyle>
  );
}

export default Item;
