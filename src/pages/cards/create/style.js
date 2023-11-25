import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme)=>{

    
    return ({
        window: {
            display: "flex"
        },
        outerBox: {
            display: 'flex',
            height: "calc(100vh - 48px)",
            top: "auto",
            bottom: 0,
            position: "fixed",
            width: "100vw"
        },
        contentBox: {
            position: 'relative',
            background: "#f5f6f6",
            flexGrow: 1, 
            display: 'flex',
            justifyContent: 'center'
        },
        content: {
            display: "flex",
            flexDirection: "column",
            width: "calc(100% - 400px)", 
            height: "calc(100% - 16px)",
            background: "#fff", 
            margin: "16px 16px 0 16px", 
            boxShadow: "0px 2px 30px #ccc6"
        },
        contentMax: {
            width: "100%"
        },
        gapless: {
            margin: "0px"
        },
        previewBox: {
            width: "400px"
        },
        scroll: {
            overflow: "auto",
            height: "100%"
        },
        previewContainer: {
            backgroundColor: "#fff",
            border: "1px solid rgb(189, 189, 189)",
            borderRadius: "25px",
            flexGrow: 1,
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box"
        }
    })
});

export default useStyles;