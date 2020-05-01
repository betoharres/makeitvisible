import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Wrapper, Container, Menu, MenuItem, LoginItem } from './Header.styles'

const Header = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Container>
        <Menu>
          <MenuItem>
            <Link to="/" exact>
              {t('Mapa')}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cadastro">{t('Quero ser Voluntário')}</Link>
          </MenuItem>
          <LoginItem>
            <Link to="/entrar">{t('Login')}</Link>
          </LoginItem>
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Header
