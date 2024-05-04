import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { DropdownProps } from './Dropdown.type'
import { StyledBox } from './Dropdown.styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Dropdown = ({
  options = [],
  label = '',
  value = '',
  onChange,
}: DropdownProps) => {
  const renderOptions = () => {
    return (
      options?.length &&
      options.map((eachOption) => {
        return (
          <MenuItem key={eachOption.id} value={eachOption.name}>
            {eachOption.name}
          </MenuItem>
        )
      })
    )
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
          onChange={onChange}
        >
          {renderOptions()}
        </Select>
      </FormControl>
    </StyledBox>
  )
}

export default Dropdown
