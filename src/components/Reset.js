import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "@emotion/styled";
import { useCheckList } from "../context/CheckListContext";
import checkListData from "../checkListData";

const ResetStyle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

function Reset() {
  const [showModal, setShowModal] = useState(false);

  const context = useCheckList();

  const reset = () => {
    setShowModal(true);
  };

  const confirm = () => {
    context.setData(checkListData);
    setShowModal(false);
  };

  const cancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <ResetStyle>
        <Button variant="warning" onClick={reset}>
          Reset
        </Button>
      </ResetStyle>
      <Modal show={showModal} onHide={cancel}>
        <Modal.Header closeButton>
          <Modal.Title>Reset CheckList?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reset?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Reset;
