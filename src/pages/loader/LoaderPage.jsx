import { Box, Typography } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie'
import loadingAnimation from '../../assets/lotties/loading.json'
import useStyles from './style';
import { useNavigate } from 'react-router-dom';

function LoaderPage() {

    const navigate = useNavigate();

    const classes = useStyles();

  return (
    <Box className={classes.window} onClick={()=>navigate('/profile/create')}>
        <Lottie
            options={{
                animationData: loadingAnimation
            }}
            height={100}
            width={100}
        />
        <Typography variant='body2' color={'#fff'}>
            Loading...
        </Typography>
    </Box>
  )
}

export default LoaderPage