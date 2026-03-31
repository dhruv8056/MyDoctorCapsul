import { useState } from 'react';
import DiagnosticDetailsView from '../view/diagnosticDetailsView';

const DiagnosticDetailsContainer = () => {
  const [activeFilter, setActiveFilter] = useState('PRICE_LOW');
  return <DiagnosticDetailsView setActiveFilter={setActiveFilter} activeFilter={activeFilter} />;
};

export default DiagnosticDetailsContainer;
