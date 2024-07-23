import React, {ReactNode} from 'react'
import {Dialog} from "@mui/material";

type IProps = {
    children: ReactNode;
    open: boolean;
    handleClose: () => void;
}

const Modal: React.FC<IProps> = ({children, open, handleClose}) => {

    return (
        <Dialog onClose={handleClose} open={open} maxWidth={'lg'} fullWidth>
            {children}
        </Dialog>
    )
}

export default Modal