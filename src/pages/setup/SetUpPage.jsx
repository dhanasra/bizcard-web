import { Box, MobileStepper, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './style';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Step1 from './frames/Step1';
import Step2 from './frames/Step2';
import Step3 from './frames/Step3';
import Step4 from './frames/Step4';
import { useNavigate } from 'react-router-dom';
import WindowLoader from '../../components/WindowLoader';
import { useSelector } from 'react-redux';
import { setupCard } from '../../network/service/setupService';
import Cookies from 'js-cookie';

function SetUpPage() {

  const classes = useStyles();

  const navigate = useNavigate();

  const formData = useSelector((state) => state.setup.formData);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if(activeStep===3){
      setupAccount();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  async function setupAccount(){
      setLoading(true);
      await setupCard(formData);
      setLoading(false);
      const authRedirect = Cookies.get('auth-redirect');
      if(authRedirect){
          Cookies.remove('auth-redirect');
          navigate(authRedirect);
      }else{
          navigate('/app/cards');
      }
  }

  return (
    <Box className={`${classes.window}`}>
        {loading && <WindowLoader/>}
        <Box className={classes.outerBox}>
          <Typography variant="h6">Create Your Business Card</Typography>
          {
            activeStep===0 ? <Step1/>
            : activeStep===1 ? <Step2/>
            : activeStep===2 ? <Step3/>
            : <Step4/>
          }
          <MobileStepper
              variant="progress"
              steps={4}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, flexGrow: 1 }}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
                  {activeStep> 2 ? "Submit" : "Next"}
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
        </Box>
    </Box>
  )
}

export default SetUpPage