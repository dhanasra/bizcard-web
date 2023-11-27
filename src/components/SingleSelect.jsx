import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function SingleSelect({options, label, onChange, value}) {

    const [selected, setSelected] = React.useState(value ?? '');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
        setSelected(event.target.value);
        onChange(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selected}
          label={label}
          onChange={handleChange}
        >
            {
                options.map((option)=>{
                    return <MenuItem key={option} value={option}>{option}</MenuItem>;
                })
            }
        </Select>
      </FormControl>
    </div>
  )
}

export default SingleSelect