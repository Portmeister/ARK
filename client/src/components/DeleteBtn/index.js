import React from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <Button 
      startIcon={<DeleteIcon />}
      size="small"
      variant="contained"
      color="secondary"
      className="delete-btn" 
      {...props} 
      role="button" 
      tabIndex="0" 
      >
        Delete
    </Button>
  );
}

export default DeleteBtn;
