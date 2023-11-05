import { styled } from "styled-components";

interface BackgroundDivProps {
  backgroundImageUrl?: string;
}

export const StyledContainer = styled.div<BackgroundDivProps>`
  .image-card {
    display: flex;
    height: 250px;
    width: 400px;
    background-color: aqua;
    max-width: inherit;
    background-image: url(${(props) => props.backgroundImageUrl});
    background-size: cover;
    background-position: center center;
  }
`;
