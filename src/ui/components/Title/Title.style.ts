import styled from '@emotion/styled'

type IStyledTitle = {
  isMobile: boolean
}

export const StyledTitle = styled.div<IStyledTitle>`
  h2 {
    font-size: ${(props) => (props.isMobile ? '42px' : '48px')};
    font-weight: bold;
    margin-bottom: ${(props) => (props.isMobile ? '30px' : '60px')};
    margin-top: ${(props) => (props.isMobile ? '30px' : '60px')};
  }

  h3 {
    font-size: 26px;
    font-weight: bold;
  }
`
