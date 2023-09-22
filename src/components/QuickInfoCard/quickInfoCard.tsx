import { StyledContainer } from "./quickInfoCard.styles";

const truncatedDescription = (description: string, maxLength: number) =>
  description.length > maxLength
    ? `${description.substring(0, maxLength)}...`
    : description;

const QuickInfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const limitedText = truncatedDescription(description, 100);

  return (
    <StyledContainer>
      <div className="quick-card">
        <div className="title">{title}</div>
        <div className="description">{limitedText}</div>
      </div>
    </StyledContainer>
  );
};

export default QuickInfoCard;
