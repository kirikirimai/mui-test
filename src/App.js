import "./App.css";
import React, { useState } from "react";
import { Button, Modal } from "@mui/material";

import styled from "@emotion/styled";
import { Box } from "@mui/system";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <h1>MUIテスト</h1>

      <hr />
      <h2>モーダルを試してみる</h2>

      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        {/* <Box sx={{ ...style, width: 400 }}> */}
        <OriginalModalStyle>
          <h2>Text in a modal</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <p>
            <a href="https://www.yahoo.co.jp">yahoo japan</a>
          </p>
        </OriginalModalStyle>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const OriginalModalStyle = styled(Box)`
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  width:400px;
  background-color:#ffff00;
  border:2px solid #000;
  
  p{
    font-size: 40px;
    font-weight: bold;
  }
`;
export default App;
