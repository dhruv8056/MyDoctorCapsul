import React from "react";
import Dialog from "@mui/material/Dialog";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface HeaderProps {
  title: string;
  rightTopText?: string;
  rightBottomText?: string;
  rightIcon?: React.ReactNode;
}

interface Props extends HeaderProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DinamicPopupModel: React.FC<Props> = ({
  open,
  onClose,
  title,
  rightTopText,
  rightBottomText,
  rightIcon,
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      className="dynamic-popup"
    >
      <div className="popup-container">

        {/* HEADER */}
        <div className="popup-header">
          <div className="popup-header__left" onClick={onClose}>
          <ArrowBackIcon sx={{ fontSize: 35 }} /> 
          </div>

          <div className="popup-header__center">{title}</div>

          <div className="popup-header__right">
            <div className="popup-header__text">
              {rightTopText && <span className="top">{rightTopText}</span>}
              {rightBottomText && (
                <span className="bottom">{rightBottomText}</span>
              )}
            </div>

            {rightIcon && (
              <div className="popup-header__icon">{rightIcon}</div>
            )}
          </div>
        </div>

        {/* BODY */}
        <div className="popup-body">
          {children}
        </div>

      </div>
    </Dialog>
  );
};

export default DinamicPopupModel;