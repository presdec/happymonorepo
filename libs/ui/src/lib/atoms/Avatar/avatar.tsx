import { FC, forwardRef, Ref } from "react";

import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps as BaseAvatarProps,
  ImageLoadingStatus,
  PrimitiveSpanProps,
} from "./primitive/avatar";
import {
  StyledAvatar,
  StyledAvatarFallback,
  StyledAvatarImage,
} from "./styled-components";

export type {
  AvatarFallbackProps,
  AvatarImageProps,
  BaseAvatarProps,
  ImageLoadingStatus,
};

export type AvatarProps = BaseAvatarProps &
  PrimitiveSpanProps &
  AvatarImageProps &
  AvatarFallbackProps;

export const Avatar = forwardRef(
  (
    {
      children,
      alt,
      src,
      delayMs,
      onLoadingStatusChange,
      ...props
    }: AvatarProps,
    forwardedRef: Ref<HTMLSpanElement>
  ) => {
    return (
      <StyledAvatar {...props} ref={forwardedRef}>
        <StyledAvatarImage
          src={src}
          alt={alt}
          onLoadingStatusChange={onLoadingStatusChange}
        />
        <StyledAvatarFallback delayMs={delayMs}>
          {children}
        </StyledAvatarFallback>
      </StyledAvatar>
    );
  }
);

Avatar.displayName = "Avatar";

export const AvatarImage = StyledAvatarImage;
export const AvatarFallback = StyledAvatarFallback;

export default Avatar;
