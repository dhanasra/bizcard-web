import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import ColorPicker from './ColorPicker';

function ThemePicker({theme, onChange}) {

    const colors = ["#B22222", "#FF8C00", "#FFD700", "#006400", "#1E90FF", "#483D8B", "#FFB6C1", "#8B4513", "#696969", "#BC8F8F", "#8B008B", "#3CB371"];

    const [selected, setSelected] = useState(theme);

    const handleChange = (color)=>{
        setSelected(color);
        onChange(color);
    }


  return (
    <Box
        sx={{
            border: '1px solid #ccc6',
            borderRadius: '3px',
            padding: '12px 24px'
        }}
    >
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <ColorPicker/>
            {
                colors.map((color)=>{
                    return <div key={color} style={{display: 'flex', alignItems: 'center'}}>
                        <Box
                            sx={{
                                padding: "5px",
                                borderRadius: '25px',
                                boxSizing: 'border-box',
                                outline: selected===color ? `2px solid ${color}`: 'none'
                            }}
                        >
                            <Box 
                                onClick={()=>handleChange(color)}
                                sx={{
                                    width: '26px',
                                    height: '26px',
                                    borderRadius: '25px',
                                    cursor: 'pointer',
                                    background: color
                                }}
                            ></Box>
                        </Box>
                    </div>
                })
            }
        </Stack>
    </Box>
  )
}

export default ThemePicker