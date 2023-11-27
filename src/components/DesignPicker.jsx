import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { HiCheckBadge } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { updateCardData } from '../features/cardBuilder/cardBuilderSlice';
import { designs } from '../utils/utils';

function DesignPicker({design}) {

    const dispatch = useDispatch();


    const [selected, setSelected] = useState(design ?? designs[0]);

    const handleClick=(design)=>{
        setSelected(design)
        dispatch(updateCardData({path: "design", value: design.name}));
    }


  return (
    <Stack spacing={{ xs: 1, sm: 4 }} direction="row" useFlexGap flexWrap="wrap">
        {
            designs.map((design)=>(
                <Grid key={design.id} item xs={6} sm={6} md={3}>
                    <Box onClick={()=>{handleClick(design)}} sx={{cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    
                        <Box sx={{
                            width: "150px",
                            height: "150px",
                            background: "#fff",
                            position: "relative",
                            outline: `2px solid ${selected.name===design.name ? '#7680A0' : '#ccc6'}`,
                            borderRadius: "8px"
                        }}>
                            { selected.name===design.name && <HiCheckBadge 
                                fontSize={26}
                                style={{
                                    position: "absolute",
                                    color: "#3C4A78",
                                    zIndex: "1000",
                                    bottom: 14,
                                    right: 14
                                }}
                            /> }
                        <div
                            style={{
                                position: "relative",
                                height: "100px"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "90px",
                                    background: "#d3d3d3",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: "8px",
                                    position: "absolute", 
                                }}
                            />
                            { design.id!=="d-4" && <Box sx={{width: "100%",  marginBottom: "-4px", position: "absolute", bottom: 0}}>
                                <img src={design.wave} alt="Wave SVG" style={{background: "#00000000"}}/>
                            </Box>}
                        </div>

                        </Box>
                    </Box>
                </Grid>
            ))
        }          
    </Stack>
  )
}

export default DesignPicker