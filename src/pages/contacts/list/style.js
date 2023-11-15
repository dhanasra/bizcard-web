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
            flexDirection: "column",
            flexGrow: 1,
            height: "calc(100% - 16px)",
            background: "#fff", 
            margin: "16px 16px 0 16px", 
            boxShadow: "0px 2px 30px #ccc6"
        },
        gapless: {
            margin: "0px"
        },
        toolbar: {
            display: "flex", 
            justifyContent: "space-between"
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