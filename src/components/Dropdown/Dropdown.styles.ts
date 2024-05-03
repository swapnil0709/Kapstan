import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)(() => ({
  minWidth: '120px',
  height: '22px',
  '& .MuiFormControl-root .MuiInputBase-root': {
    '& .MuiSelect-select.MuiSelect-outlined': {
      padding: '0 0 2px 0',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 0,
    },
    '& .MuiSvgIcon-root': {
      width: '32px',
      height: '32px',
      right: '13px',
      top: 'calc(50% - 1em)',
    },
  },
}))
