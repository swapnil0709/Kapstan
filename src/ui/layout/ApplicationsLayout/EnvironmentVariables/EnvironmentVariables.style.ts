import { Box, Typography, styled } from '@mui/material'

export const StyledActionIconContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '5px',
}))
export const StyledDrawerBox = styled(Box)(() => ({
  height: '186px',
  width: '632px',
  border: '1px solid #EBEBEB',
  borderRadius: '8px',
  padding: '12px',
}))
export const StyledFileUpload = styled(Box)(() => ({
  height: '80px',
  width: '608px',
  backgroundColor: '#F8F8F8',
  border: '1px dashed #BDBDBD',
  borderRadius: '4px',
  padding: '24px 8px 12px 8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))
export const StyledFileUploadText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '20px',
  marginTop: '8px',
}))
export const StyledFileUploadFooterText = styled(Typography)(() => ({
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px',
  marginTop: '4px',
}))
export const StyledFileUploadButtonsContainer = styled(Box)(() => ({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
}))
export const StyledEnvVariableText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
}))

export const StyledEnvVariableContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}))
export const StyledEnvVariableInputContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '24px',
}))
export const StyledEnvVariableTextFieldContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
}))
export const StyledEnvVariableFlexContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid #EBEBEB',
  height: '48px',
  width: '474px',
  padding: '12px',
}))
export const StyledEnvVariableContentContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '12px',
}))
export const StyledEnvVarText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '20px',
}))
