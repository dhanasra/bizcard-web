import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageCropper from './ImageCropper'

function ImagePickerPlaceholder({text, picture, width, onChange}) {

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(picture);
  
    const handleOpen = () => {
       setOpen(true);
    };
  
    const handleClose = () => {
       setOpen(false);
    };

    const handleCroppedImage = (image) => {
        setCroppedImage((_)=>{
            onChange(image);
            return image;
        });
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
    <Stack sx={{width: "100%"}}>
        <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id={`fileInput-${text}`}
            />
        <label htmlFor={`fileInput-${text}`}>
            <Box
                sx={{
                    cursor: "pointer",
                    width: width ?? "132px",
                    height: "132px",
                    border: "2px dashed #E2E8F0",
                    borderRadius: "8px",
                    background: "#F7FAFC",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {
                croppedImage 
                    ? <img src={croppedImage} width={"100%"} height={"100%"} style={{borderRadius: "8px"}} alt="Preview" />
                    : <Typography variant='body3'>{text ?? "Upload Picture"}</Typography>
                }
            </Box>
        </label>
        <ImageCropper
          open={open}
          image={image}
          width = {width!=null ? 420: null}
          onCrop={handleCroppedImage}
          onClose={handleClose}
        />
    </Stack>
  )
}

export default ImagePickerPlaceholder