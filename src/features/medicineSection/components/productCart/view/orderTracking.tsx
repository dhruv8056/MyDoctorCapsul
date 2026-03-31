import React from 'react';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { orderTrackingProps } from '../interface/IProductCart';
import { Icon } from '@iconify/react/dist/iconify.js';
import DinamicPopupModel from '@shared/components/common/DinamicPopupModel';

const OrderTracking: React.FC<orderTrackingProps> = ({ open, onClose }) => {
  return (
    <DinamicPopupModel
      open={open}
      onClose={onClose}
      title="Order Medicine"
      rightTopText="Order ID"
      rightBottomText="20014578963"
      rightIcon={<Icon icon="teenyicons:box-outline" width="15" height="15" />}
    >
      <div className="order-tracking">
      <div className="timeline">

  {/* Completed */}
  <div className="timeline-item completed">
    <div className="circle green">
      <Icon icon="material-symbols-light:check" width="20" height="20" />
    </div>
    <div className="content">
      <p className="title">Order Placed</p>
      <span className="time">Oct 24, 2025 - 10:30 AM</span>
    </div>
  </div>

  {/* Completed */}
  <div className="timeline-item completed">
    <div className="circle green">
      <Icon icon="material-symbols-light:check" width="20" height="20" />
    </div>
    <div className="content">
      <p className="title">Dispatch</p>
      <span className="time">Oct 24, 2025 - 12:30 PM</span>
    </div>
  </div>

  {/* 🔥 ACTIVE */}
  <div className="timeline-item active">
    <div className="circle blue">
      <LocalShippingIcon />
    </div>

    <div className="content">
      <p className="title">In Transit</p>
      <span className="time">Arriving approx. 12 mins</span>

      <div className="tracking-card">
        <div className="tracking-card__map" />

        <div className="tracking-card__footer">
          <div className="user">
            <Avatar src="/user.png" />
            <div>
              <p className="name">Himax Motidem</p>
              <span className="role">VERIFIED PARTNER</span>
            </div>
          </div>

          <Button className="live-btn" variant="contained">
            Live location
          </Button>
        </div>
      </div>
    </div>
  </div>

  {/* DISABLED */}
  <div className="timeline-item disabled">
    <div className="circle gray">
      <Icon icon="bx:box" width="15" height="15" />
    </div>
    <div className="content">
      <p className="title">Delivered</p>
      <span className="time">Estimated today at 04:30 AM</span>
    </div>
  </div>

</div>
      </div>
    </DinamicPopupModel>
  );
};

export default OrderTracking;