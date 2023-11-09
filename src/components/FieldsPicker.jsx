import { Box, Chip, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import { generateRandomId } from '../utils/utils';

function FieldsPicker({onAddField}) {
    const createCategoryMap = (data) => {
        const categoryMap = new Map();

        data.forEach(item => {
            const { category } = item;
            if (!categoryMap.has(category)) {
                categoryMap.set(category, [item]);
            } else {
                categoryMap.get(category).push(item);
            }
        });

        return categoryMap;
    };

    const fields = createCategoryMap(window.config.fieldTypes);

    return (
        <Box
            p={2}
            sx={{
                width: "40%",
                borderRadius: "8px",
                background: "#F7FAFC"
            }}
        >
            <TextField
                size="small"
                placeholder={"Search fields here..."}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PiMagnifyingGlassLight style={{ marginRight: "4px" }} fontSize={"20px"} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#EEEf',
                            boxShadow: "0px 2px 30px #ccc6"
                        },
                    }
                }}
            />

            {Array.from(fields).map(([key, value]) => (
                <div key={key}>
                    <Box sx={{ margin: "16px 0 8px 2px" }}>
                        <Typography variant='labelLight'>{key}</Typography>
                    </Box>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                        {value.map((val) => (
                            <Chip  
                                key={val._id} 
                                label={val.label} 
                                onClick={()=>{
                                    const uniqueId = generateRandomId();
                                    onAddField({
                                        identifier: uniqueId,
                                        id: val._id,
                                        label: val.label,
                                        icon: val.icon
                                    })
                                }}
                                sx={{ 
                                    background: "#fff", 
                                    boxShadow: "0px 2px 30px #ccc6",
                                    cursor: "pointer" 
                                }} 
                            />
                        ))}
                    </Stack>
                </div>
            ))}
            
        </Box>
    );
}

export default FieldsPicker;
