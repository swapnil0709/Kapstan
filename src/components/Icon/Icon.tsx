import React from 'react'
import { IconProps } from './Icon.type'

const Icon: React.FC<IconProps> = ({ icon, altText, onClick }) => {
  return (
    <img
      src={icon}
      onClick={onClick}
      aria-label={altText}
      role="img"
      style={{ cursor: 'pointer' }}
    />
  )
}

export default Icon
