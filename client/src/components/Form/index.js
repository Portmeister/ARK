import React from "react";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import SaveBtn from "../SaveBtn";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <TextField 
        variant="outlined"
        color="primary"
        label="Required"
        style={{
          opacity: 0.8,
        }}
        className="form-control" 
        {...props} 
      />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <TextField 
        variant="outlined"
        color="primary"
        label="Optional"
        style={{
          opacity: 0.8,
        }}
        className="form-control" 
        {...props} 
      />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <SaveBtn 
      variant="contained" 
      {...props} 
      style={{ 
        float: "right", 
        marginBottom: 10
      }} 
      className="btn btn-success"
    >
        Submit
    </SaveBtn>
  );
}
