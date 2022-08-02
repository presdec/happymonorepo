/* eslint-disable react/jsx-pascal-case */
import type * as Radix from "@radix-ui/react-primitive";
import { ChangeEvent, forwardRef, ReactNode } from "react";

import { Primitive } from "../../../radix-utils";

/* -------------------------------------------------------------------------------------------------
 * TextAreaRoot
 * -----------------------------------------------------------------------------------------------*/

type TextAreaRootImplElement = React.ElementRef<typeof Primitive.div>;

type PrimitiveTextAreaRootProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;

export type TextAreaRootProps = PrimitiveTextAreaRootProps & {
  id?: string;
  children?: ReactNode;
};

const TEXT_AREA_ROOT_NAME = "TextAreaRoot";

export const TextAreaRoot = forwardRef<
  TextAreaRootImplElement,
  TextAreaRootProps
>((props, forwardedRef) => {
  const { children, ...textAreaRootProps } = props;
  return (
    <Primitive.div
      data-id="text-area-root"
      {...textAreaRootProps}
      ref={forwardedRef}
    >
      {children}
    </Primitive.div>
  );
});

TextAreaRoot.displayName = TEXT_AREA_ROOT_NAME;

/* -------------------------------------------------------------------------------------------------
 * TextAreaContainer
 * -----------------------------------------------------------------------------------------------*/

type TextAreaContainerImplElement = React.ElementRef<typeof Primitive.div>;

type PrimitiveTextAreaContainerProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;

export type TextAreaContainerProps = PrimitiveTextAreaContainerProps & {
  id?: string;
};

const TEXT_AREA_CONTAINER_NAME = "TextAreaContainer";

export const TextAreaContainer = forwardRef<
  TextAreaContainerImplElement,
  PrimitiveTextAreaContainerProps
>((props, forwardedRef) => {
  const { children, ...textAreaContainerProps } = props;
  return (
    <Primitive.div
      data-id="text-area-container"
      {...textAreaContainerProps}
      ref={forwardedRef}
    >
      {children}
    </Primitive.div>
  );
});

TextAreaContainer.displayName = TEXT_AREA_CONTAINER_NAME;

/* -------------------------------------------------------------------------------------------------
 * TextAreaValue
 * -----------------------------------------------------------------------------------------------*/

type TextAreaValueImplElement = React.ElementRef<typeof Primitive.textarea>;

type PrimitiveTextAreaValueProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.textarea
>;

export type TextAreaValueProps = PrimitiveTextAreaValueProps & {
  id?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TEXT_AREA_NAME = "TextArea";

export const TextAreaValue = forwardRef<
  TextAreaValueImplElement,
  TextAreaValueProps
>((props, forwardedRef) => {
  const { children, ...textAreaProps } = props;
  return (
    <Primitive.textarea
      data-id="text-area-value"
      {...textAreaProps}
      ref={forwardedRef}
    >
      {children}
    </Primitive.textarea>
  );
});

TextAreaValue.displayName = TEXT_AREA_NAME;

export default {
  Root: TextAreaRoot,
  Container: TextAreaContainer,
  Value: TextAreaValue,
};
