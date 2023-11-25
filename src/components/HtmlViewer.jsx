import { Box } from '@mui/material'
import React from 'react'
import ReactHtmlParser from "react-html-parser";

function HtmlViewer({content}) {
    const isVisible = content && (content.replace(/<[^>]*>/g, "").trim()!=="");

  return (
    isVisible && <Box>
        {/* <Typography variant="body1">About Us</Typography> */}
        <div>
            {ReactHtmlParser(content)}
        </div>
    </Box>
  )
}

export default HtmlViewer