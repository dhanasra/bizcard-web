import { FormControl, MenuItem, Select } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1)
    },
  }));
  
  const CardsDropdown = ({cards, onChange}) => {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(cards?.length>0 ? cards[0] : null);
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      onChange(event.target.value);
    };
  
    return (
      <FormControl className={classes.formControl}>
        <Select
          size="small"
          labelId="select-label"
          id="select"
          value={selectedValue}
          onChange={handleChange}
        >
            {
                cards?.map((card)=>{
                    return <MenuItem key={card._id} value={card}>{card.cardName}</MenuItem>
                })
            }
        </Select>
      </FormControl>
    );
  };
  
  export default CardsDropdown;