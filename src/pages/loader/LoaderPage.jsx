import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import loadingAnimation from '../../assets/lotties/loading.json'
import useStyles from './style';
import { useNavigate } from 'react-router-dom';
import { fetchConfigData, fetchMainData } from '../../network/service/appService';
import { initializeApp } from '../../features/app/appSlice';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { checkCookies } from '../../utils/utils';

function LoaderPage() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
        const initApp=async()=>{
            const isLoggedIn = checkCookies();

            const data = isLoggedIn ? await fetchMainData() : await fetchConfigData();
            dispatch(initializeApp(data));

            const redirect = Cookies.get('redirect');
            
            navigate(redirect ?? '/app/cards');
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