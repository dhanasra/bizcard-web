import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { CARD_IMAGE_PATH } from '../utils/global';
import { HiUser } from 'react-icons/hi2';
import { formatDate } from '../utils/utils';
import { FaEdit, FaEllipsisV, FaSave, FaTrash } from 'react-icons/fa';


export default function DataTable({contacts}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      label: "Edit Connection",
      icon: <FaEdit/>
    },
    {
      label: "Save Contact",
      icon: <FaSave/>
    },
    {
      label: "Remove",
      icon: <FaTrash/>
    }
  ];

  const columns = [

    { 
      field: '_id', 
      headerName: 'Profile',  
      width: 120,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <Avatar src={`${CARD_IMAGE_PATH}${params.value}%2Fprofile.jpg?alt=media`}><HiUser/> </Avatar>
          </>
        );
      } 
    },
    { 
      field: 'contact', 
      headerName: 'Contact', 
      flex: 1,
      renderCell: (params) => {
        console.log(params);
        return (
          <Stack>
            <Typography variant="title">{params.value?.fullName}</Typography>
            <Typography variant="labelLight">{params.value?.email}</Typography>
          </Stack>
        );
      } 
    },
    { 
      field: 'phoneNumber', 
      headerName: 'PhoneNumber', 
      flex: 1,
    },
    { 
      field: 'tags', 
      headerName: 'Tag', 
      flex: 1,
    },
    { 
      field: 'type', 
      headerName: 'Type', 
      flex: 1,
    },
    { 
      field: 'connectedAt', 
      headerName: 'Date', 
      width: 120
    },
    { 
      field: 'export', 
      headerName: 'Export', 
      width: 120
    },
    { 
      headerName: '', 
      width: 60,
      renderCell: (params) => {
        console.log(params);
        return (
          <Stack>
            <IconButton onClick={handleMenuOpen} ><FaEllipsisV fontSize={16}/></IconButton>
            <Menu   
              anchorEl={anchorEl}
              id="account-menu"
              sx={{mt: 4}}
              open={menuOpen}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
              {
                  options.map((option)=>(
                          <MenuItem key={option.label} onClick={()=>{}}>
                              <ListItemIcon>{option.icon}</ListItemIcon>
                              <Typography variant="label">{option.label}</Typography>
                          </MenuItem>
                  ))
              }
          </Menu>
          </Stack>
        );
      } 
    }
  ];


  const rows = contacts.map((contact)=>{
    return { 
      id: contact._id, 
      _id: contact._id, 
      contact: {
        fullName: contact.fullName,
        email: contact.email
      },
      tags: contact.tags,
      type: contact.type,
      phoneNumber: contact.phoneNumber,
      connectedAt: formatDate(contact.connectedAt)
    }
  })

  console.log(rows);


  return (
    <div style={{ height: "calc(100% - 24px)", width: 'calc(100% - 48px)'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowClick={(e)=>{}}
      />
      
    </div>
  );
}
