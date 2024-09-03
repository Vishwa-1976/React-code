import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
function Muidemo()
{
    return (
        <div>
            <Button variant="contained">contained</Button>
            <Button variant="text">Text</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained">Click Me <DeleteIcon variant="contained">Outlined</DeleteIcon> </Button>
        </div>
    )
}
export default Muidemo