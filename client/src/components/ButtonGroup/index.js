import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";

function ButtonGroup() {
    return(
        <ButtonGroup>
            <SaveBtn />
            <DeleteBtn />
        </ButtonGroup>
    )
}

export default ButtonGroup;