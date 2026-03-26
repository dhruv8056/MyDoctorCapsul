import React from 'react';

type InformationOverviewSectionProps = {
  video?: string;
  image: string;
  name: string;
  children?: React.ReactNode;
};

const InformationOverviewSection: React.FC<InformationOverviewSectionProps> = ({ video, image, name, children }) => {
  return (
    <div className="information-overview-section">
      {/* 🔹 Video Banner */}
      {video && (
        <div className="information-overview-section__video">
          <img src={video} alt="Doctor Video" />
        </div>
      )}

      {/* 🔹 Profile Content */}
      <div className="information-overview-section__profile">
        {/* Image */}
        <div className="information-overview-section__image">
          <img src={image} alt={name} />
        </div>

        {/* Info */}
        <div className="information-overview-section__info">
          <h2 className="information-overview-section__name">{name}</h2>

          <div className="information-overview-section__extra">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InformationOverviewSection;
