import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import { CiPickerEmpty } from "react-icons/ci";


const ColorPicker = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(null);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor.rgb);
  };

  const styles = reactCSS({
    'default': {
      color: {
        width: '28px',
        height: '28px',
        borderRadius: '25px',
        background: `${color !=null ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : '#fff'}`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '25px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative'
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} >
        <IconButton sx={{position: "absolute", left: 0, right: 0, top: 0, bottom: 0}} onClick={handleClick}><CiPickerEmpty fontSize={18}/></IconButton>
        <div style={styles.color??'#fff'} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color??"#fff"} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
