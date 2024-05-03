import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { DropdownProps } from './Dropdown.type'
import { StyledBox } from './Dropdown.styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Dropdown = ({ options, label = '' }: DropdownProps) => {
  const [value, setValue] = React.useState(options[0].value)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  const renderOptions = () => {
    return options.map((eachOption) => {
      return (
        <MenuItem key={eachOption.id} value={eachOption.value}>
          {eachOption.value}
        </MenuItem>
      )
    })
  }
  return (
    <StyledBox>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          IconComponent={KeyboardArrowDownIcon}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {renderOptions()}
        </Select>
      </FormControl>
    </StyledBox>
  )
}

export default Dropdown
