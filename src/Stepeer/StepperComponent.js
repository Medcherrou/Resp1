import { Stepper, Step, StepLabel,Box } from '@material-ui/core'
import React from 'react';
export default function StepperComponent({ currentStep }) {
  return (
    <Box>
      <Stepper activeStep={currentStep -1} orientation="horizontal">
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
    </Box>
  )
}