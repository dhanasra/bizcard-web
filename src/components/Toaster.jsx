import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  error: {
    backgroundColor: theme.palette.error.main,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Toaster = ({ open, handleClose, message, variant, autoHideDuration }) => {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(open);

  useEffect(() => {
    setSnackbarOpen(open);
  }, [open]);

  useEffect(() => {
    if (snackbarOpen) {
      const timer = setTimeout(() => {
        handleClose();
        setSnackbarOpen(false);
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [snackbarOpen, handleClose, autoHideDuration]);

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes[variant]}
        message={
          <span className={classes.message}>
            {message}
          </span>
        }
        action={[
          <IconButton key="close" color="inherit" onClick={handleClose}>
            <FiX />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default Toaster;
