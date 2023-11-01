import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    window: {
        height: "100vh", 
        display: "flex",
        textAlign: "center", 
        alignItems: "center",
        justifyContent: "center", 
        background: theme.palette.bgGrey.main, 
    },
    outerBox: {
        background: "#fff", 
        maxWidth: "400px", 
        padding: "24px", 
        borderRadius: "6px", 
        width: "100%", 
        margin: "24px", 
        boxShadow: "0px 2px 30px #ccc6"
    }
}));

export default useStyles;