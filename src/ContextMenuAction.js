import React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const ContextMenuActions = (props) => {
    console.log(props.rowIndex);
  const popover = (
    <Popover id={props.rowIndex}>
        <div >Hiii</div>
      {/* <Popover.Content>
        <a href="/about">About</a>
        <br />
        <a href="/contact">Contact</a>
      </Popover.Content> */}
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="link">More</Button>
    </OverlayTrigger>
  );
};

export default ContextMenuActions;
