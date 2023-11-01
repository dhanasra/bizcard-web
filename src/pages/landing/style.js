import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    window: {
        display: "flex", 
        flexDirection: "column", 
        height: "100vh"
    },
    outerBox: {
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        flexGrow: 1, 
        backgroundColor: theme.palette.primary.main, 
        px: 8
    },
    contentWrapper: {
        maxWidth: "1200px", 
        display: "flex"
    },
    contentWrapperMax: {
        flexDirection: "column",
        textAlign: "center",
        padding: "50px 0"
    },
    contentLeft: {
        display: "flex", 
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column", 
        width: "50%", 
        p: 3
    },
    contentRight: {
        display: "flex", 
        justifyContent: "center",
        flexDirection: "column",
        width: "50%", 
    },
    contentMax: {
        width: "100%",
        alignItems: "center"
    }
}))

export default useStyles;