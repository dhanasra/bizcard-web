import { Box, Chip, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CommonAppBar from '../../components/CommonAppBar'
import Sider from '../../components/Sider'
import useStyles from './style';
import theme from '../../utils/theme';
import CardItemVert from '../../components/CardItemVert';

function EmailSignaturesPage() {

    const classes = useStyles();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const cards = window.cards;

    const templates = ["SQUARE", "QR CODE", "RECT", "LOGO", "TEXT"];

    // const [selected, setSelected] = useState(cards.length>0 ? cards[0] : null);

  return (
    <Box className={classes.window}>
        <CommonAppBar />
        <Box className={classes.outerBox}>
            <Sider/>
            <Box component="main" className={`${classes.contentBox} ${isSmallScreen ? classes.gapless: ''}`}>
                <Box className={`${isSmallScreen ? classes.gapless: ''} ${classes.content}`}>
                    <Box className={classes.toolbar} p={isSmallScreen ? 2: 2}>
                        <Typography variant='h6'>Email Signatures</Typography>
                    </Box>

                    <Box className={classes.cardsWrapper}>

                        <Grid container sx={{p: 2}} spacing={3}>
                            {
                                cards?.map(card=>{
                                    return (
                                        <Grid item key={card._id}>
                                            <CardItemVert cardData={card}/>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>

                    </Box>

                </Box>
                <Box className={classes.previewBox}>
                    <Box sx={{background: "#fff", width: "100%", height: "calc(100% - 16px)"}}>
                        <Box className={classes.toolbar} p={isSmallScreen ? 2: 2}>
                            <Typography variant='body1'>Select template</Typography>
                        </Box>

                        <Stack direction={"row"} spacing={2} sx={{px: 2}}>
                            {
                                templates.map((temp)=>{
                                    return (
                                        <Chip label={temp} color="secondary" sx={{cursor: "pointer"}}/>
                                    );
                                })
                            }
                        </Stack>


                    </Box>
                        {/* <Box sx={{p: 2}}>
                            <CardsDropdown cards={cards} onChange={(val)=>{}}/>
                        </Box>
                        <Box sx={{flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                            <Box sx={{P: 3, background: "#fff", borderRadius: "4px", width: "340px", height: "200px", boxShadow: "0px 2px 30px #ccc6"}}>

                            </Box>
                            <Button variant="contained" sx={{marginTop: "36px"}}>Create Signature</Button>
                        </Box> */}
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default EmailSignaturesPage