import { styled } from "styled-components";

export const StyledQuickCardContainer = styled.div`
  .quick-card {
    font-family: ${(props) => props.theme.fonts.secondary};
    margin-bottom: 20px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .description {
    font-size: 15px;
    padding-top: 5px;
    font-weight: 300;
  }

  /* TODO: break down styled component */
  @media (max-width: 768px) {
    margin-top: auto;
    .quick-card {
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      background-color: #f2f2f2;
      .title {
        font-size: 20px;
      }

      .description {
        /* margin-bottom: 20px;
        margin-left: 10px; */
      }
    }
  }
`;

export const QuickCardTitle = styled.div`
  .title {
    font-size: 22px;
  }

  .description {
    font-size: 15px;
    padding-top: 5px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 14px;
    }
  }
`;
