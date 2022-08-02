import { ForwardedRef } from "hoist-non-react-statics/node_modules/@types/react";
import { forwardRef } from "react";

import { TextAreaValueProps as PrimitiveTextAreaValueProps } from "./primitive/text-area";
import {
  StyledTextAreaContainer,
  StyledTextAreaRoot,
  StyledTextAreaRootProps,
  StyledTextAreaValue,
} from "./styled-components";

export type {
  TextAreaRootProps,
  TextAreaContainerProps,
  TextAreaValueProps,
} from "./primitive/text-area";

export const TextAreaRoot = StyledTextAreaRoot;
export const TextAreaContainer = StyledTextAreaContainer;
export const TextAreaValue = StyledTextAreaValue;

export type TextAreaProps = StyledTextAreaRootProps &
  PrimitiveTextAreaValueProps;

export const TextArea = forwardRef(
  (props: TextAreaProps, forwardedRef: ForwardedRef<HTMLTextAreaElement>) => {
    const { children, appearance = "default", ...textAreaProps } = props;

    return (
      <TextAreaRoot>
        <TextAreaContainer>
          <TextAreaValue
            appearance={appearance}
            ref={forwardedRef}
            {...textAreaProps}
          >
            {children}
          </TextAreaValue>
        </TextAreaContainer>
      </TextAreaRoot>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
