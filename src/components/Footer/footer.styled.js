import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.gray};

  padding: 55px 0 35px 0;

  & .footer-container {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3.5rem;
    /* align-items: center; */

    & .footer-section {
      color: #fff;
      font-size: 1.7rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      & h5 {
        font-size: 1.8rem;
        font-style: bold;
      }

      & h6 {
        font-size: 1.7rem;
        font-style: italic;
      }
    }
  }

  & .social-media {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding: 13px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    & h5 {
      font-size: 1.6rem;
      color: #fff;
      font-weight: 300;
    }

    & .social-media-icon {
      width: 2.5rem;
      height: 2.5rem;
      color: #fff;
    }
  }
`;
