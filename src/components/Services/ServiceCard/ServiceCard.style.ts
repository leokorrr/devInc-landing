import styled from '@emotion/styled'

type IStyledServiceCard = {
  isLaptop: boolean
  isTablet: boolean
}

export const StyledServiceCard = styled.div<IStyledServiceCard>`
  .service-card {
    width:  ${(props) => ((props.isLaptop && !props.isTablet) ? '220px' : '272px')};
    height: ${(props) => ((props.isLaptop && !props.isTablet) ? '220px' : '272px')};
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.08);
    border-radius: 40px 40px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h3 {
      margin: 0;
      text-align: center;
      font-size: ${(props) => ((props.isLaptop && !props.isTablet) ? '20px' : '26px')};

    }

    &__icon {
      margin-bottom: ${(props) => ((props.isLaptop && !props.isTablet) ? '8px' : '20px')};

      img {
        width: ${(props) => ((props.isLaptop && !props.isTablet) ? '76px' : '92px')};
        height: ${(props) => ((props.isLaptop && !props.isTablet) ? '76px' : '92px')};
      }
    }
  }

  &:last-of-type {
    padding-right: ${(props) => (props.isTablet ? '20px' : 0)};
  }
`
