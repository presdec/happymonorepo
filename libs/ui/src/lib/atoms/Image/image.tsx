import { FC, SyntheticEvent, useMemo, useState } from "react";
import styled from "styled-components";

import { Grid } from "../View";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore There is a ts error when running this component in storybook
import fallbackImage from "./transparent-placeholder.png";

const useImageFallback = (src: string, fallbackSrc: string) => {
  const [status, setStatus] = useState<
    "idle" | "fetching" | "failed" | "completed"
  >("idle");

  const isIdle = status === "idle";
  const isFetching = status === "fetching";
  const isFailed = status === "failed";
  const isCompleted = status === "completed";

  const imSrc = isFailed ? fallbackSrc : src;

  const state = useMemo(
    () => ({
      imSrc,
      fallbackImgSrc: fallbackSrc,
      status,
      isIdle,
      isFailed,
      isCompleted,
      isFetching,
    }),
    [imSrc, fallbackSrc, status, isIdle, isFailed, isCompleted, isFetching]
  );

  const handlers = useMemo(
    () => ({
      setFailed: (event: SyntheticEvent<HTMLImageElement, Event>) => {
        // eslint-disable-next-line no-param-reassign
        event.currentTarget.onerror = null; // prevents looping
        setStatus("failed");
      },
      setCompleted: (event: SyntheticEvent<HTMLImageElement, Event>) => {
        if (!isFailed) {
          // eslint-disable-next-line no-param-reassign
          event.currentTarget.onload = null; // prevents looping
          setStatus("completed");
        }
      },
    }),
    [isFailed]
  );

  return [state, handlers] as const;
};

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

const StyledImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
`;

const StyledLoading = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  filter: blur(5px);
`;

export const Image: FC<ImageProps> = ({
  src,
  fallbackSrc,
  alt,
  /**
   * https://web.dev/browser-level-image-lazy-loading/
   */
  loading = "eager",
  ...props
}) => {
  const [{ imSrc, fallbackImgSrc, isFetching }, { setFailed, setCompleted }] =
    useImageFallback(src, fallbackSrc || fallbackImage);

  return (
    <Grid alignItems="center" justifyItems="center">
      <StyledImg
        alt={alt}
        src={imSrc}
        onError={setFailed}
        onLoad={setCompleted}
        loading={loading}
        {...props}
      />
      {isFetching ? null : <StyledLoading src={fallbackImgSrc} {...props} />}
    </Grid>
  );
};

export default Image;
