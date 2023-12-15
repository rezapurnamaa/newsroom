import { styled } from "styled-components";

interface BackgroundDivProps {
  backgroundimageurl?: string;
}

export const StyledBackgroundImageContainer = styled.div<BackgroundDivProps>`
  display: flex;
  background-color: aqua;
  background-image: url(${(props) => props.backgroundimageurl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;

  .image-card {
    height: 250px;
    width: 400px;
  }

  .image-hero {
    height: 600px;
    width: inherit;
  }

  @media (max-width: 768px) {
    .image-card,
    .image-hero {
      height: 250px;
      width: 360px;
    }
  }
`;
