import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CountUp from 'react-countup';
import { PiEyeLight, PiHandshakeLight, PiHeartLight, PiPersonLight } from 'react-icons/pi';

function AnalyticsTabPanel({data}) {

  // const data = [
  //   { label: 'A', value: 10 },
  //   { label: 'B', value: 15 },
  //   { label: 'C', value: 20 }
  // ];

  const analytics = [
    {
      name: "Views",
      count: data?.viewCount??0,
      color: "#ff2052",
      icon: <PiEyeLight fontSize={"24px"} color="#ff2052"/>
    },
    {
      name: "Unique Visitors",
      count: data?.uniqueVisitCount??0,
      color: "#ff5e20",
      icon: <PiPersonLight fontSize={"24px"} color="#ff5e20"/>
    },
    {
      name: "Saved",
      count: data?.savedCount??0,
      color: "#2051ff",
      icon: <PiHeartLight fontSize={"24px"} color="#2051ff"/>
    },
    {
      name: "Connected",
      count: data?.connectedCount??0,
      color: "#5f20ff",
      icon: <PiHandshakeLight fontSize={"24px"} color="#5f20ff"/>
    }
  ]

  return (
    <Box 
      sx={{
        p: 3,
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <Grid container spacing={2}>
        {
          analytics.map(
            (item)=>{
              return <Grid key={item.name} item md={3} sm = {4} xs={6}>
                <Box sx={{
                  p: 3,
                  height: "80px",
                  background: "#fff",
                  boxShadow: "0px 2px 30px #ccc6",
                  display: "flex",
                  borderRadius: "6px",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>   
      
                  <Typography variant="titleBold" color={item.color}>{item.name}</Typography>
                  <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    {item.icon}
                    <CountUp start={0} end={item?.count??0} duration={2.5} separator="," style={{fontSize: "32px"}} />
                  </Stack>
      
                </Box>
              </Grid>
            }
          )
        }
        {/* <Grid item xs={12}>
          <Box sx={{width: "100%"}}>
            <HorizontalBarChart data={data} />
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  )
}

export default AnalyticsTabPanel