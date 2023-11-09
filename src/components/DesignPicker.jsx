import { Avatar, Box, Grid } from '@mui/material'
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
    <Grid container spacing={4}>
        {
            designs.map((design)=>(
                <Grid key={design.id} item xs={6} sm={6} md={3}>
                    <Box onClick={()=>{handleClick(design)}} sx={{cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    
                        <Box sx={{
                            width: "150px",
                            height: "150px",
                            background: "#fff",
                            position: "relative",
                            boxShadow: "0px 2px 30px #ccc6",
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
                                    background: "#7FFFD4",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: "8px",
                                    position: "absolute", 
                                }}
                            />

                            <Avatar sx={{
                                zIndex: 100,
                                background: "#7FFFD4", 
                                position: "absolute", 
                                width: 46,
                                height: 46,
                                right: 16,
                                top: 40
                            }}/>

                            

                            { design.id!=="d-4" && <Box sx={{width: "100%",  marginBottom: "-4px", position: "absolute", bottom: 0}}>
                                <img src={design.wave} alt="Wave SVG" style={{background: "#00000000"}}/>
                            </Box>}
                        </div>

                        </Box>
                    </Box>
                </Grid>
            ))
        }          
    </Grid>
  )
}

export default DesignPicker