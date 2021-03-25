import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <Button 
      startIcon={<SaveIcon />}
      size="small"
      variant="contained"
      color="primary"
      className="save-btn" 
      {...props} 
      role="button" 
      tabIndex="0">
      ✗
    </Button>
  );
}

export default SaveBtn;