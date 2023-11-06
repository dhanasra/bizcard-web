import React, { useState } from 'react';
import { Button, Box, Stack, Typography } from '@mui/material';
import ImageCropper from '../../../components/ImageCropper';

function Step3() {

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        handleOpen();
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '300px', 
      py: 2, 
      px: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'  
    }}>
      <Typography variant="subtitle" color="bgGrey">Now upload your picture</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
        <Stack spacing={2} alignItems={"center"} justifyContent={"center"}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
          {croppedImage && (
            <img src={croppedImage} width={120} alt="Preview" />
          )}
          <label htmlFor="fileInput">
            <Button variant="contained" component="span">
              Upload Image
            </Button>
          </label>
        </Stack>

        <ImageCropper 
          open={open}
          image={image}
          onCrop={setCroppedImage}
          onClose={handleClose}
        />
      </Box>
    </Box>
  );
}

export default Step3;

