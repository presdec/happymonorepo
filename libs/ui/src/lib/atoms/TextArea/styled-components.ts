import styled from "styled-components";

import {
  inputContainerMixin,
  inputMixin,
  inputRootMixin,
  StyledInputRootProps,
} from "../Input/styled-components";
import TextAreaPrimitive, {
  TextAreaValueProps as PrimitiveTextAreaValueProps,
} from "./primitive/text-area";

export type StyledTextAreaRootProps = PrimitiveTextAreaValueProps &
  Pick<StyledInputRootProps, "appearance">;

export const StyledTextAreaRoot = styled(
  TextAreaPrimitive.Root
)<StyledTextAreaRootProps>`
  ${inputRootMixin}
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
`;

export const StyledTextAreaContainer = styled(
  TextAreaPrimitive.Container
)<StyledTextAreaRootProps>`
  ${inputContainerMixin}

  max-width: 100%;
  width: min-content;
`;

export const StyledTextAreaValue = styled(TextAreaPrimitive.Value)<
  StyledTextAreaRootProps & {
    maxHeight?: string;
    minHeight?: string;
    minWidth?: string;
    width?: string;
  }
>`
  ${inputMixin}

  max-height: ${({ maxHeight }) => maxHeight || "300px"};
  min-height: ${({ minHeight }) => minHeight || "100px"};
  min-width: ${({ minWidth }) => minWidth || "300px"};
  width: ${({ width }) =>
    width || "100vw"}; // fill all available space up to parent max-width
  resize: both;
`;
