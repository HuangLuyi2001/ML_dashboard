import React, { useState } from 'react';
import p1 from './picture/p1.png'; 
import p2 from './picture/p2.png'; 
import p3 from './picture/p3.png'; 


const Dashboard1 = () => {
    return (
        <div>
          <h1>Exploratory Data Analysis</h1>
          <img src={p1} alt="Exploratory Data Analysis" />
        </div>
      );
};

const Dashboard2 = () => {
  return (
    <div>
      <h1>Model's Evaluation</h1>
      <img src={p2} alt="Model's Evaluation" />
    </div>
  );
};

const Dashboard3 = () => {
  return (
    <div>
      <h1>Model's Insight Generation</h1>
      <img src={p3} alt="Model's Insight Generation" />
    </div>
  );
};

const DashboardSelector = ({ onSelectDashboard }) => {
  return (
    <div>
      <h1>Machine Learning Dashboard</h1>
      <button onClick={() => onSelectDashboard(<Dashboard1 />)}>Exploratory Data Analysis</button>
      <button onClick={() => onSelectDashboard(<Dashboard2 />)}>Model's Evaluation</button>
      <button onClick={() => onSelectDashboard(<Dashboard3 />)}>Model's Insight Generation</button>
    </div>
  );
};

const DashboardApp = () => {
  const [activeDashboard, setActiveDashboard] = useState(null);

  const handleSelectDashboard = (dashboard) => {
    setActiveDashboard(dashboard);
  };

  if (!activeDashboard) {
    return <DashboardSelector onSelectDashboard={handleSelectDashboard} />;
  }

  return (
    <div>
      {activeDashboard}
      <button onClick={() => setActiveDashboard(null)}>Back to dashboard selector</button>
    </div>
  );
};

export default DashboardApp;