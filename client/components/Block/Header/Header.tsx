import React from 'react'

import { StyledHeader, StyledProviderLogo } from './Header.styled'

import { Link } from 'client/components/Styled/Link/Link'
import { Header } from 'client/components/Styled/Typography/Header'

interface IProps {
  src: string
  name: string
  to: string
}

export const BlockHeader: React.FC<IProps> = ({ src, name, to }) => (
  <StyledHeader>
    <StyledProviderLogo height={32} src={src} />{' '}
    <Header>
      <Link href={to} target="_blank">
        {name}
      </Link>
    </Header>
  </StyledHeader>
)

export default BlockHeader
