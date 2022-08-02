/* eslint-disable react/jsx-pascal-case */
import type * as Radix from "@radix-ui/react-primitive";
import { forwardRef } from "react";

import { Primitive } from "../../../radix-utils";
type TypographyImplElement = React.ElementRef<typeof Primitive.span>;
type PrimitiveTypographyProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.span
>;

export interface TypographyProps extends PrimitiveTypographyProps {
  className?: string;
}

export const DisplayLarge = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-displaylarge" {...props} ref={ref} />
  )
);
DisplayLarge.displayName = "DisplayLarge";

export const DisplayMedium = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-displaymedium" {...props} ref={ref} />
  )
);
DisplayMedium.displayName = "DisplayMedium";

export const DisplaySmall = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-displaysmall" {...props} ref={ref} />
  )
);
DisplaySmall.displayName = "DisplaySmall";

export const DisplayXSmall = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-displayxsmall" {...props} ref={ref} />
  )
);
DisplayXSmall.displayName = "DisplayXSmall";

export const HeadingXXLarge = forwardRef<
  TypographyImplElement,
  TypographyProps
>(({ asChild = true, ...props }, ref) => (
  <Primitive.span
    data-id="typo-headingxxlarge"
    asChild={asChild}
    {...props}
    ref={ref}
  >
    {asChild ? <h1>{props.children}</h1> : props.children}
  </Primitive.span>
));
HeadingXXLarge.displayName = "HeadingXXLarge";

export const HeadingXLarge = forwardRef<TypographyImplElement, TypographyProps>(
  ({ asChild = true, ...props }, ref) => (
    <Primitive.span
      data-id="typo-headingxlarge"
      asChild={asChild}
      {...props}
      ref={ref}
    >
      {asChild ? <h2>{props.children}</h2> : props.children}
    </Primitive.span>
  )
);
HeadingXLarge.displayName = "HeadingXLarge";

export const HeadingLarge = forwardRef<TypographyImplElement, TypographyProps>(
  ({ asChild = true, ...props }, ref) => (
    <Primitive.span
      data-id="typo-headinglarge"
      asChild={asChild}
      {...props}
      ref={ref}
    >
      {asChild ? <h3>{props.children}</h3> : props.children}
    </Primitive.span>
  )
);
HeadingLarge.displayName = "HeadingLarge";

export const HeadingMedium = forwardRef<TypographyImplElement, TypographyProps>(
  ({ asChild = true, ...props }, ref) => (
    <Primitive.span
      data-id="typo-headingmedium"
      asChild={asChild}
      {...props}
      ref={ref}
    >
      {asChild ? <h4>{props.children}</h4> : props.children}
    </Primitive.span>
  )
);
HeadingMedium.displayName = "HeadingMedium";

export const HeadingSmall = forwardRef<TypographyImplElement, TypographyProps>(
  ({ asChild = true, ...props }, ref) => (
    <Primitive.span
      data-id="typo-headingsmall"
      asChild={asChild}
      {...props}
      ref={ref}
    >
      {asChild ? <h5>{props.children}</h5> : props.children}
    </Primitive.span>
  )
);
HeadingSmall.displayName = "HeadingSmall";

export const HeadingXSmall = forwardRef<TypographyImplElement, TypographyProps>(
  ({ asChild = true, ...props }, ref) => (
    <Primitive.span
      data-id="typo-headingxsmall"
      asChild={asChild}
      {...props}
      ref={ref}
    >
      {asChild ? <h6>{props.children}</h6> : props.children}
    </Primitive.span>
  )
);
HeadingXSmall.displayName = "HeadingXSmall";

export const LabelLarge = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-labellarge" {...props} ref={ref} />
  )
);
LabelLarge.displayName = "LabelLarge";

export const LabelMedium = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-labelmedium" {...props} ref={ref} />
  )
);
LabelMedium.displayName = "LabelMedium";

export const LabelSmall = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-labelsmall" {...props} ref={ref} />
  )
);
LabelSmall.displayName = "LabelSmall";

export const LabelXSmall = forwardRef<TypographyImplElement, TypographyProps>(
  (props, ref) => (
    <Primitive.span data-id="typo-labelxsmall" {...props} ref={ref} />
  )
);
LabelXSmall.displayName = "LabelXSmall";

export const ParagraphLarge = forwardRef<
  TypographyImplElement,
  TypographyProps
>(({ asChild = true, ...props }, ref) => (
  <Primitive.span
    data-id="typo-paragraphlarge"
    asChild={asChild}
    {...props}
    ref={ref}
  >
    {asChild ? <p>{props.children}</p> : props.children}
  </Primitive.span>
));
ParagraphLarge.displayName = "ParagraphLarge";

export const ParagraphMedium = forwardRef<
  TypographyImplElement,
  TypographyProps
>(({ asChild = true, ...props }, ref) => (
  <Primitive.span
    data-id="typo-paragraphmedium"
    asChild={asChild}
    {...props}
    ref={ref}
  >
    {asChild ? <p>{props.children}</p> : props.children}
  </Primitive.span>
));
ParagraphMedium.displayName = "ParagraphMedium";

export const ParagraphSmall = forwardRef<
  TypographyImplElement,
  TypographyProps
>(({ asChild = true, ...props }, ref) => (
  <Primitive.span
    data-id="typo-paragraphsmall"
    asChild={asChild}
    {...props}
    ref={ref}
  >
    {asChild ? <p>{props.children}</p> : props.children}
  </Primitive.span>
));
ParagraphSmall.displayName = "ParagraphSmall";

export const ParagraphXSmall = forwardRef<
  TypographyImplElement,
  TypographyProps
>(({ asChild = true, ...props }, ref) => (
  <Primitive.span
    data-id="typo-paragraphxsmall"
    asChild={asChild}
    {...props}
    ref={ref}
  >
    {asChild ? <p>{props.children}</p> : props.children}
  </Primitive.span>
));
ParagraphXSmall.displayName = "ParagraphXSmall";
