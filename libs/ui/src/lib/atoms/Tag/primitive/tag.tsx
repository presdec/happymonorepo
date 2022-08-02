/* eslint-disable react/jsx-pascal-case */
import type * as Radix from "@radix-ui/react-primitive";
import * as React from "react";
import { FocusEvent, ForwardedRef, forwardRef, ReactNode } from "react";

import { Primitive } from "../../../radix-utils";

/* -------------------------------------------------------------------------------------------------
 * TagRoot
 * -----------------------------------------------------------------------------------------------*/
type TagRootImplElement = React.ElementRef<typeof Primitive.span>;

type PrimitiveTagRootProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.span
>;

export interface TagRootBaseProps extends PrimitiveTagRootProps {
  id?: string;
  children?: ReactNode;
}

export type TagRootProps = TagRootBaseProps;

const TAG_ROOT_NAME = "TagRoot";

/**
 * `ButtonEnhancer` handles visibility and animations for any a `enhancer` used in `Button`.
 */
export const TagRoot = React.forwardRef<TagRootImplElement, TagRootProps>(
  (props, forwardedRef) => {
    const { children, ...tagRootProps } = props;

    return (
      <Primitive.span {...tagRootProps} ref={forwardedRef}>
        {children}
      </Primitive.span>
    );
  }
);

TagRoot.displayName = TAG_ROOT_NAME;

/* -------------------------------------------------------------------------------------------------
 * TagLabel
 * -----------------------------------------------------------------------------------------------*/
type TagLabelImplElement = React.ElementRef<typeof Primitive.span>;

type PrimitiveTagLabelProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.span
>;

export interface TagLabelBaseProps extends PrimitiveTagLabelProps {
  id?: string;
  children?: ReactNode;
}

export type TagLabelProps = TagLabelBaseProps;

const TAG_LABEL_NAME = "TagLabel";

/**
 * `ButtonEnhancer` handles visibility and animations for any a `enhancer` used in `Button`.
 */
export const TagLabel = React.forwardRef<TagLabelImplElement, TagLabelProps>(
  (props, forwardedRef) => {
    const { children, ...tagLabelProps } = props;

    return (
      <Primitive.span {...tagLabelProps} ref={forwardedRef}>
        {children}
      </Primitive.span>
    );
  }
);

TagLabel.displayName = TAG_LABEL_NAME;

export default {
  Root: TagRoot,
  Label: TagLabel,
};
