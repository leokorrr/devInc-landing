import styled from '@emotion/styled'

export const StyledProjectCard = styled.div`
  .project-card {
    width: 100%;
    height: 100%;
    max-height: 300px;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
    } 

    &__content {
      background-color: transparent;
      opacity: 0;
      transition: .2s;
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: white;
    }

    a {
      color: white;
      text-decoration: none;
    }

    &:hover {
      cursor: pointer;

      .project-card__content {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.4);
      }

      a {
        text-decoration: underline;
      }
    }
  }
`
