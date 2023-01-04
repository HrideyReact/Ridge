import { FormControl, MenuItem, Select } from "@mui/material"
import { Box } from "@mui/system"

const OverView=()=>{
    return(
        <Box>
            <FormControl sx={{minWidth: 120 }}>
            <Select
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
            value={'Yesterday'}
            //   onChange={handleChange}
            >
            <MenuItem value="Yesterday">
                Yesterday
            </MenuItem>
            <MenuItem value={"Today"}>Today</MenuItem>
            </Select>
      </FormControl>

        </Box>
    )
}

export {OverView}