import { Button, TextField, Typography } from '@mui/material'
import Card from '../../../../components/Card/Card'
import Icon from '../../../../components/Icon/Icon'
import downloadIcon from '../../../../assets/Download.svg'
import addIcon from '../../../../assets/Add.svg'
import uploadIcon from '../../../../assets/Up.svg'
import trashIcon from '../../../../assets/Lines.svg'
import Drawer from '../../../../components/Drawer/Drawer'
import React, { useState } from 'react'
import {
  StyledActionIconContainer,
  StyledDrawerBox,
  StyledEnvVarText,
  StyledEnvVariableContainer,
  StyledEnvVariableContentContainer,
  StyledEnvVariableFlexContainer,
  StyledEnvVariableInputContainer,
  StyledEnvVariableText,
  StyledEnvVariableTextFieldContainer,
  StyledFileUpload,
  StyledFileUploadButtonsContainer,
  StyledFileUploadFooterText,
  StyledFileUploadText,
} from './EnvironmentVariables.style'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { FormProps } from './EnvironmentVariables.type'
import useLocalStorage from '../../../../hooks/useLocalStorage'

const EnvironmentVariables = () => {
  const [open, setOpen] = useState(false)
  const [showFileUploadDrawer, setShowFileUploadDrawer] = useState(false)
  const { register, control, handleSubmit, reset } = useForm<FormProps>()
  const [localValue, setLocalValue] = useLocalStorage('env', '')
  const closeDrawer = () => {
    setOpen(false)
  }
  const openFileUploadDrawer = () => {
    setOpen(true)
    setShowFileUploadDrawer(true)
  }
  const openEnvVariableDrawer = () => {
    setShowFileUploadDrawer(false)
    setOpen(true)
  }
  const onSubmit = (data: FormProps) => {
    setLocalValue(JSON.stringify(data))
    reset()
  }

  const actionIcons = (
    <StyledActionIconContainer>
      <Icon altText="add icon" icon={addIcon} onClick={openEnvVariableDrawer} />
      <Icon
        altText="download icon"
        icon={downloadIcon}
        onClick={openFileUploadDrawer}
      />
    </StyledActionIconContainer>
  )

  const getDrawerContainer = (content: React.ReactNode) => {
    return (
      <Drawer open={open} anchor="right">
        <StyledDrawerBox>{content}</StyledDrawerBox>
      </Drawer>
    )
  }

  const getButtonsGroup = () => {
    return (
      <StyledFileUploadButtonsContainer>
        <Button variant="outlined" size="medium" onClick={closeDrawer}>
          Cancel
        </Button>
        <Button
          variant="contained"
          size="medium"
          onClick={handleSubmit(onSubmit)}
        >
          Add
        </Button>
      </StyledFileUploadButtonsContainer>
    )
  }

  const getFileUpload = (content: React.ReactNode) => {
    return (
      <>
        <StyledFileUpload>
          <Icon altText="upload icon" icon={uploadIcon} />
          <StyledFileUploadText>
            Click or drag file(s) here to upload
          </StyledFileUploadText>
        </StyledFileUpload>
        <StyledFileUploadFooterText>
          Upload a .env file. It should not be greater than 5KB.
        </StyledFileUploadFooterText>
        {content}
      </>
    )
  }

  const getFormInput = (
    id: number,
    text: string,
    width: string,
    name: string,
    type: string
  ) => {
    return (
      <StyledEnvVariableTextFieldContainer>
        <StyledEnvVariableText>{text}</StyledEnvVariableText>
        <TextField
          id={`outlined-basic ${id}`}
          variant="outlined"
          size="small"
          type={type}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...register(name as any)}
          sx={{
            width: { width },
          }}
        />
      </StyledEnvVariableTextFieldContainer>
    )
  }
  const getEnvVariableForm = (content: React.ReactNode) => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledEnvVariableContainer>
          <StyledEnvVariableInputContainer>
            {getFormInput(1, 'Name', '237px', 'name1', 'text')}
            {getFormInput(2, 'Value', '199px', 'value1', 'text')}
            <Icon altText="trash icon" icon={trashIcon} />
          </StyledEnvVariableInputContainer>
          <StyledEnvVariableInputContainer>
            {getFormInput(3, 'Name', '237px', 'name2', 'text')}
            {getFormInput(4, 'Value', '199px', 'value2', 'text')}
            <Icon altText="trash icon" icon={trashIcon} />
          </StyledEnvVariableInputContainer>
        </StyledEnvVariableContainer>
        {content}
      </form>
    )
  }

  const drawerContent = showFileUploadDrawer
    ? getFileUpload(getButtonsGroup())
    : getEnvVariableForm(getButtonsGroup())

  const renderCardContent = () => {
    if (!localValue) {
      return <Typography>No environment variable created.</Typography>
    }
    const data = JSON.parse(localValue)

    return (
      <StyledEnvVariableContentContainer>
        <StyledEnvVariableFlexContainer>
          <StyledEnvVarText>{data.name1}</StyledEnvVarText>
          <StyledEnvVariableText>{data.value1}</StyledEnvVariableText>
          <Icon altText="trash icon" icon={trashIcon} />
        </StyledEnvVariableFlexContainer>
        <StyledEnvVariableFlexContainer>
          <StyledEnvVarText>{data.name2}</StyledEnvVarText>
          <StyledEnvVariableText>{data.value2}</StyledEnvVariableText>
          <Icon altText="trash icon" icon={trashIcon} />
        </StyledEnvVariableFlexContainer>
      </StyledEnvVariableContentContainer>
    )
  }
  return (
    <>
      <Card
        heading="Environment variables"
        padding="16px"
        height="363px"
        actionIcons={actionIcons}
      >
        {renderCardContent()}
      </Card>
      <DevTool control={control} />
      {getDrawerContainer(drawerContent)}
    </>
  )
}

export default EnvironmentVariables
