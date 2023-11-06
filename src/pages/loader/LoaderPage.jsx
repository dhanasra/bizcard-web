import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import loadingAnimation from '../../assets/lotties/loading.json'
import useStyles from './style';
import { useNavigate } from 'react-router-dom';
import { fetchMainData } from '../../network/service/appService';
import { initializeApp } from '../../features/app/appSlice';
import { useDispatch } from 'react-redux';

function LoaderPage() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
        const initApp=async()=>{
            const data = await fetchMainData();
            dispatch(initializeApp(data));
            
            navigate('/app/cards');
        }
        initApp();
    })

    const classes = useStyles();

  return (
    <Box className={classes.window}>
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