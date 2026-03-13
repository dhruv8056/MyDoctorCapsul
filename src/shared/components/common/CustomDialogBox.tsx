import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogProps } from '@mui/material/Dialog';

interface CustomDialogProps extends DialogProps {
  children: React.ReactNode;
  borderRadius?: string | number;
}

const CustomDialogBox: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  children,
  borderRadius = 2, 
  ...dialogProps
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...dialogProps}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: borderRadius,
          transition: 'none', 
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default React.memo(CustomDialogBox);
