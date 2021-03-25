import React from "react";
import "./style.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from '@material-ui/core/Button';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div>
      <TextareaAutosize 
        {...props}
        className="form-group"
        aria-label="minimum height" 
        rowsMin={3} 
        placeholder="Minimum 3 rows"
        />
      </div>
  );
}

export function FormBtn(props) {
  return (
    <Button 
      variant="contained" 
      {...props} 
      style={{ 
        float: "right", 
        marginBottom: 10 ,
        color: "green"
      }} 
      className="btn btn-success"
    >
        Submit
    </Button>
  );
}
