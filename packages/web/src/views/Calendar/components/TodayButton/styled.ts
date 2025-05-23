import styled from "styled-components";
import { Flex } from "@web/components/Flex";

export const StyledTodayButton = styled(Flex)`
  color: ${({ theme }) => theme.color.text.light};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.text.size.l};
  min-width: 80px;

  &:hover {
    filter: brightness(160%);
    transition: filter 0.35s ease-out;
  }
`;
