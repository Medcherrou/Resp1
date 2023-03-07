import React from 'react';
import App from '../App';

export const multiStepContext = React.createContext();

const StepContext = ({ currentStep }) => {
  return (
    <div>
      <multiStepContext.Provider value={{ currentStep }}>      
        <App />
      </multiStepContext.Provider>
    </div>
  );
};
export default StepContext;
