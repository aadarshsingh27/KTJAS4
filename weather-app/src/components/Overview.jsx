import React from 'react';

const Overview = ({ data }) => {
  if (!data) return null;

  return (
    <div className="overview">
      <h2>Weather Overview</h2>
      {/* Display overview data */}
    </div>
  );
};

export default Overview;
