import React from 'react';

interface ReviewCardProps {
  name: string;
  image: string;
  date: string;
  review: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, image, date, review, rating }) => {
  return (
    <div className="review-card">
      <div className="review-card__header">
        <div className="review-card__user">
          <img src={image} alt={name} className="review-card__avatar" />

          <div className="review-card__info">
            <span className="review-card__name">{name}</span>
            <span className="review-card__date">{date}</span>
          </div>
        </div>

        <div className="review-card__stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={star <= rating ? 'star-filled' : 'star-empty'}>
              ★
            </span>
          ))}
        </div>
      </div>

      <p className="review-card__text">{review}</p>
    </div>
  );
};

export default ReviewCard;
