
import { Divider, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineInfoCircle, AiOutlineLogout, AiOutlineMessage, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import theme from '../utils/theme';
import { FaCrown } from "react-icons/fa";
import { clearCache } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

function AccountMenu(props) {

    const navigate = useNavigate();

    const options = [
        {
            icon: <AiOutlineUser size={"18px"} color='#444'/>,
            label: "My Account"
        },
        {
            icon: <FaCrown size={"18px"} color={theme.palette.secondary.main}/>,
            label: "Upgrade"
        },
        {
            icon: <AiOutlineQuestionCircle size={"18px"} color='#444'/>,
            label: "Help"
        },
        {
            icon: <AiOutlineMessage size={"18px"} color='#444'/>,
            label: "Feedback"
        },
        {
            label: "divider"
        },
        {
            icon: <AiOutlineInfoCircle size={"18px"} color='#444'/>,
            label: "Privacy Policy"
        },
        {
            icon: <AiOutlineLogout size={"18px"} color='#444'/>,
            label: "Logout"
        }
    ];

    const handleClick=(option)=>{
        if(option==="Logout"){
            clearCache();
            navigate("/signin");
        }
    }

  return (
    <Menu   
        anchorEl={props.anchorEl}
        id="account-menu"
        sx={{mt: 4}}
        open={props.open}
        onClose={props.onClose}
        onClick={props.onClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        {
            options.map((option)=>(
                option.label!=="divider"
                    ? <MenuItem key={option.label} onClick={()=>handleClick(option.label)}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <Typography variant="label">{option.label}</Typography>
                      </MenuItem>
                    : <Divider key={option.label} sx={{width: "200px"}}/>
            ))
        }
    </Menu>
  )
}

export default AccountMenu