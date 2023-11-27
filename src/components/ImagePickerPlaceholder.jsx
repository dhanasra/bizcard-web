import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageCropper from './ImageCropper'
import { FiX } from 'react-icons/fi';
import { InfoOutlined } from '@mui/icons-material';

function ImagePickerPlaceholder({text, picture, width, height, onChange, onRemove, title, instruction, icon}) {

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

    const removeImage = ()=>{
        setCroppedImage((_)=>{
            onRemove();
            return null;
        });
    }

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
        <Box sx={{
            width: width ?? "132px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px"
        }}>
            <Stack direction={"row"} spacing={1}>
                <Typography variant="body3">{title}</Typography>
                {instruction && <Tooltip title={instruction} placement="top" arrow>
                    <InfoOutlined fontSize='10px' sx={{color: '#666'}}/>
                </Tooltip>}
            </Stack>
        </Box>
        <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id={`fileInput-${text}`}
            />
            <Box
                sx={{
                    width: width ?? "132px",
                    height: height ?? "132px",
                    border: "2px dashed #E2E8F0",
                    borderRadius: "8px",
                    background: "#F7FAFC",
                    position: "relative",
                    padding: "4px",
                }}
            >
                { croppedImage && <IconButton onClick={removeImage} sx={{position: "absolute", zIndex: "1000", top: 8, right: 8, background: "#00000033"}}>
                    <FiX color='#fff' fontSize={"22px"} />
                </IconButton> }
                <label htmlFor={`fileInput-${text}`}>
                    <Box
                        sx={{
                            cursor: "pointer",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                    {
                    croppedImage 
                        ? <img src={croppedImage} width={"100%"} height={"100%"} style={{borderRadius: "8px", cursor: "pointer"}} alt="Preview" />
                        : <Stack sx={{display: "flex"}} alignItems={"center"} spacing={2}>
                            {icon}
                            <Typography variant='body3'>{text ?? "Upload Picture"}</Typography>
                        </Stack>
                    }
                    </Box>
                </label>
            </Box>
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