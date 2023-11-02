import { Box, Stack} from '@mui/material'
import React from 'react'
import FieldsPicker from '../../../../components/FieldsPicker'

function FieldsForm() {
  return (
    <Stack direction="row" spacing={2} sx={{display: "flex", width: "100%"}}>
        <Box
            p={2}
            sx={{
                width: "60%",
                boxSizing: "border-box",
                border: "2px dashed #E2E8F0",
                borderRadius: "8px",
                background: "#F7FAFC"
            }}
        >
            
        </Box>
        <FieldsPicker/>
    </Stack>
  )
}

export default FieldsForm