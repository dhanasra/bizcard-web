import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function WindowLoader() {
  return (
    <Box
        sx={{
            zIndex: "5000",
            width: "100vw",
            height: "100vh",
            background: "#00000088",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <CircularProgress
            size={32}
            color='white'
            thickness={2}
            value={100}
        />
    </Box>
  )
}

export default WindowLoader