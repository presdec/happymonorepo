import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, Ref } from "react";

import { IconProps } from "../Icon";
import { TagRootProps as PrimitiveTagRooProps } from "./primitive/tag";
import {
  StyledTagIcon,
  StyledTagLabel,
  StyledTagRoot,
} from "./styled-components";

export const TagRoot = StyledTagRoot;
export const TagIcon = StyledTagIcon;
export const TagLabel = StyledTagLabel;

export type TagProps = PrimitiveTagRooProps & {
  icon?: IconProps["icon"];
  iconLabel?: string;
};

export const Tag = forwardRef(
  (
    {
      children,
      icon = faWindowClose,
      onClick,
      iconLabel = "remove",
      ...props
    }: TagProps,
    forwardedRef?: Ref<HTMLSpanElement>
  ) => {
    return (
      <TagRoot ref={forwardedRef} onClick={onClick} {...props}>
        <TagLabel>{children}</TagLabel>
        <TagIcon icon={icon} label={iconLabel} />
      </TagRoot>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
