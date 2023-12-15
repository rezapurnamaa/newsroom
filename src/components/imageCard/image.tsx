import { StyledBackgroundImageContainer } from "./image.styles";

interface ImageProps {
  backgroundimageurl: string;
  imageType: string;
}

function Image({
  backgroundimageurl: backgroundImageUrl,
  imageType,
}: ImageProps) {
  return (
    <StyledBackgroundImageContainer backgroundimageurl={backgroundImageUrl}>
      {imageType === "hero" ? (
        <div className="image-hero"></div>
      ) : (
        <div className="image-card"></div>
      )}
    </StyledBackgroundImageContainer>
  );
}

export default Image;
