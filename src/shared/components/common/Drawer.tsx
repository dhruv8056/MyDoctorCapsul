import React from 'react';
import MuiDrawer from '@mui/material/Drawer';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  side?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, side = 'right', children }) => {
  return (
    <MuiDrawer anchor={side} open={isOpen} onClose={onClose}>
      <div className="w-[400px] max-w-[100vw] h-full">{children}</div>
    </MuiDrawer>
  );
};

export default Drawer;
