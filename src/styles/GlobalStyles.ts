import { css } from '@emotion/react'
import { styled } from '@mui/material'

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition:
      background-color 0.3s,
      border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: '#F8F8F8';
    transition:
      color 0.3s,
      background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`
export const StyledDot = styled('div')(({ color }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: color,
}))

export const StyledTag = styled('div')(
  ({
    color,
    bgColor,
    width,
  }: {
    color: string
    bgColor: string
    width?: string
  }) => ({
    height: '24px',
    width: width,
    borderRadius: '4px',
    padding: '3px 4px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: bgColor,
    border: `1px solid ${color}`,
    color: color,
  })
)
