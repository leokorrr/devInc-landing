import styled from '@emotion/styled'

export const StyledIntro = styled.div`
background-color: #F8F9FA;
position: relative;

.text-line {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dash 2.5s linear forwards, filling 2.5s ease-in forwards;
  font-size: 150px;

  @media only screen and (max-width: 1070px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 80px; 
  }

  @media only screen and (max-width: 600px) {
    font-size: 60px; 
  }

  @media only screen and (max-width: 450px) {
    font-size: 48px; 
  }
}

.text-line text {
  font-weight: 600;
  font-style: normal;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes filling {
  0%, 95% { fill: #000000; fill-opacity: 0; }
  100% { fill: #000000; fill-opacity: 1; }
}
`
