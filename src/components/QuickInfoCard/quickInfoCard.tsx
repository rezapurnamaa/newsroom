import {
  QuickCardTitle,
  StyledQuickCardContainer,
} from "./quickInfoCard.styles";

const truncatedDescription = (description: string, maxLength: number) =>
  description.length > maxLength
    ? `${description.substring(0, maxLength)}...`
    : description;

const QuickInfoCard = (props: { title: string; description: string }) => {
  const limitedText = truncatedDescription(props.description, 100);

  return (
    <StyledQuickCardContainer>
      <div className="quick-card">
        <QuickCardTitle>
          <div className="title">{props.title}</div>
        </QuickCardTitle>
        <div className="description">{limitedText}</div>
      </div>
    </StyledQuickCardContainer>
  );
};

export default QuickInfoCard;
