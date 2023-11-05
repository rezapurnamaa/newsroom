import { StyledContainer } from "./imageCard.styles";

interface ImageCardProps {
  backgroundImageUrl: string;
}

function ImageCard({ backgroundImageUrl }: ImageCardProps) {
  return (
    <StyledContainer backgroundImageUrl={backgroundImageUrl}>
      <div className="image-card"></div>
    </StyledContainer>
  );
}

export default ImageCard;
