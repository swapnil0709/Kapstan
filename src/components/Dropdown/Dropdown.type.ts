import { SelectChangeEvent } from '@mui/material'

export type DropdownProps = {
  options: { id: number; name: string }[]
  label?: string
  value: string
  onChange: (event: SelectChangeEvent) => void
}
