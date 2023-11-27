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
            overflow: "auto",
            background: "#f5f6f6",
            flexGrow: 1, 
            display: 'flex',
            justifyContent: 'center'
        },
        content: {
            display: "flex",
            width: "100%", 
            justifyContent: "center"
        },
        gapless: {
            margin: "0px"
        },
        previewBox: {
            width: "400px",
        },
        toolbar: {
            display: "flex", 
            justifyContent: "space-between",
            padding: "12px"
        },
        searchField: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#EEEf',
                    boxShadow: "0px 2px 30px #ccc6"
                },
            }
        },
        cardsWrapper: {
            flexGrow: 1,
            overflow: "auto"
        }
    })
});

export default useStyles;