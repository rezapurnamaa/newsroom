import styled from "styled-components";

export const StyledContainer = styled.div`
  .spotlight-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }

  .title {
    font-size: 130px;
    font-family: none;
  }

  .description {
    font-size: 20px;
    font-family: ${(props) => props.theme.fonts.primary};
    text-transform: uppercase;
  }

  .dividers-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .divider {
    height: 2px;
    background-color: ${(props) => props.theme.colors.background.lightBlack};
    width: 35%;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin: 0px 3px;
  }
`;
