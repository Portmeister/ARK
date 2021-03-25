import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all inFormControlLabidually
function CheckBox() {
    const [checked, setChecked] = React.useState(true)
    return (
        <FormControlLabel 
            control={<Checkbox 
                checked={checked}
                icon={<DeleteIcon />}
                checkedIcon={<SaveIcon />}
                onChange={(e)=>setChecked(e.target.checked)}
                color="primary"
                inputProps={{
                    'aria-label': 'secondary checkbox'
                }}
            />}
            label="Mark Complete"
        />
    );
}

export default CheckBox;