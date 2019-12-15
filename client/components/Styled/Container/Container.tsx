import { ComponentType } from 'react'

import styled, { css } from 'styled-components'

export interface IContainerProps {
  inline?: boolean
  leftOuterSpacing?: number
  rightOuterSpacing?: number
  topOuterSpacing?: number
  bottomOuterSpacing?: number
  leftInnerSpacing?: number
  rightInnerSpacing?: number
  topInnerSpacing?: number
  bottomInnerSpacing?: number
}

export const Container: ComponentType<IContainerProps> = styled.div`
  ${({
    inline,
    leftOuterSpacing,
    rightOuterSpacing,
    topOuterSpacing,
    bottomOuterSpacing,
    leftInnerSpacing,
    rightInnerSpacing,
    topInnerSpacing,
    bottomInnerSpacing
  }: IContainerProps) =>
    css`
      ${inline &&
        css`
          display: inline;
        `};
      ${leftOuterSpacing &&
        css`
          margin-left: ${leftOuterSpacing}rem;
        `};
      ${rightOuterSpacing &&
        css`
          margin-right: ${rightOuterSpacing}rem;
        `};
      ${topOuterSpacing &&
        css`
          margin-top: ${topOuterSpacing}rem;
        `};
      ${bottomOuterSpacing &&
        css`
          margin-bottom: ${bottomOuterSpacing}rem;
        `};
      ${leftInnerSpacing &&
        css`
          padding-left: ${leftInnerSpacing}rem;
        `};
      ${rightInnerSpacing &&
        css`
          padding-right: ${rightInnerSpacing}rem;
        `};
      ${topInnerSpacing &&
        css`
          padding-top: ${topInnerSpacing}rem;
        `};
      ${bottomInnerSpacing &&
        css`
          padding-bottom: ${bottomInnerSpacing}rem;
        `};
    `}
`

export default Container
