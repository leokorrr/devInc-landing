import styled from '@emotion/styled'

export const StyledHamburgerMenu = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #ffffff;
  padding: 16px 24px;
	-webkit-animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;


  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
