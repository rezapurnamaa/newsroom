import styled from "styled-components";
export const StyledContainer = styled.div`
  font-size: 50px;
  margin-left: 20px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.primary};

  .logo {
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center; /* Change alignment for small screens */
    /* Add additional styles for small screens */
    font-size: 30px;
    margin-left: 0px;
  }
`;
