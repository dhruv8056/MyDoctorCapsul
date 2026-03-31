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
        <div className="order-tracking__timeline">

          {/* Completed */}
          <div className="order-tracking__item order-tracking__item--completed">
            <div className="order-tracking__circle order-tracking__circle--green">
              <Icon icon="material-symbols-light:check" width="20" height="20" />
            </div>
            <div className="order-tracking__content">
              <p className="order-tracking__title">Order Placed</p>
              <span className="order-tracking__time">Oct 24, 2025 - 10:30 AM</span>
            </div>
          </div>

          {/* Completed */}
          <div className="order-tracking__item order-tracking__item--completed">
            <div className="order-tracking__circle order-tracking__circle--green">
              <Icon icon="material-symbols-light:check" width="20" height="20" />
            </div>
            <div className="order-tracking__content">
              <p className="order-tracking__title">Dispatch</p>
              <span className="order-tracking__time">Oct 24, 2025 - 12:30 PM</span>
            </div>
          </div>

          {/* 🔥 ACTIVE */}
          <div className="order-tracking__item order-tracking__item--active">
            <div className="order-tracking__circle order-tracking__circle--blue">
              <LocalShippingIcon />
            </div>

            <div className="order-tracking__content">
              <p className="order-tracking__title">In Transit</p>
              <span className="order-tracking__time">Arriving approx. 12 mins</span>

              <div className="order-tracking__card">
                <div className="order-tracking__card-map" />

                <div className="order-tracking__card-footer">
                  <div className="order-tracking__user">
                    <Avatar src="/user.png" />
                    <div>
                      <p className="order-tracking__user-name">Himax Motidem</p>
                      <span className="order-tracking__user-role">VERIFIED PARTNER</span>
                    </div>
                  </div>

                  <Button className="order-tracking__btn" variant="contained">
                    Live location
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* DISABLED */}
          <div className="order-tracking__item order-tracking__item--disabled">
            <div className="order-tracking__circle order-tracking__circle--gray">
              <Icon icon="bx:box" width="15" height="15" />
            </div>
            <div className="order-tracking__content">
              <p className="order-tracking__title">Delivered</p>
              <span className="order-tracking__time">Estimated today at 04:30 AM</span>
            </div>
          </div>

        </div>
      </div>
    </DinamicPopupModel>
  );
};

export default OrderTracking;