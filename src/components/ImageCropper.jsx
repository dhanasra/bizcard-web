import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import Cropper from 'react-easy-crop'

function ImageCropper(props) {
  
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);


  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleCropImage = async () => {
    if (props.image && croppedArea) {
      const canvas = document.createElement('canvas');
      const imageToCrop = new Image();
      imageToCrop.src = props.image;

      const scaleX = imageToCrop.naturalWidth / imageToCrop.width;
      const scaleY = imageToCrop.naturalHeight / imageToCrop.height;

      canvas.width = croppedArea.width;
      canvas.height = croppedArea.height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        imageToCrop,
        croppedArea.x * scaleX,
        croppedArea.y * scaleY,
        croppedArea.width * scaleX,
        croppedArea.height * scaleY,
        0,
        0,
        croppedArea.width,
        croppedArea.height
      );

      const base64Image = canvas.toDataURL('image/jpeg');
      props.onCrop(base64Image);
      props.onClose();
    }
  };


  return (
    <Dialog open={props.open} onClose={props.onClose} sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px", 
            height: "500px"
          },
        },
      }}>
        <DialogTitle>Crop Image</DialogTitle>
        <DialogContent
          sx={{
            position: "relative",
            margin: "20px"
          }}
        >
          <Box>
            {props.image && (
              <Cropper
                image={props.image}
                crop={crop}
                zoom={zoom}
                cropSize={{width: props.width ?? 200, height: 200}}
                aspect={4 / 3}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                style={{
                  color: "#fff"
                }}
              />
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCropImage}>OK</Button>
          <Button onClick={props.onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
  )
}

export default ImageCropper