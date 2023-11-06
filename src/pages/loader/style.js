import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    window: {
        height: "100vh", 
        display: "flex",
        textAlign: "center", 
        alignItems: "center",
        justifyContent: "center", 
        flexDirection: "column",
        background: theme.palette.primary.main, 
    }
}))

export default useStyles;