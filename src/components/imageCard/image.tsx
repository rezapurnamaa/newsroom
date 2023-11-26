import { StyledBackgroundImageContainer } from "./image.styles";

interface ImageProps {
  backgroundImageUrl: string;
  imageType: string;
}

function Image({ backgroundImageUrl, imageType }: ImageProps) {
  return (
    <StyledBackgroundImageContainer backgroundImageUrl={backgroundImageUrl}>
      {imageType === "hero" ? (
        <div className="image-hero"></div>
      ) : (
        <div className="image-card"></div>
      )}
    </StyledBackgroundImageContainer>
  );
}

export default Image;
