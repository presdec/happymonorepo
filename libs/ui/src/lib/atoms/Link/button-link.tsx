import { FC } from "react";

import type { StyledButtonProps } from "../Button";
import { ButtonProps } from "../Button";
import { Button } from "../Button";
import { Link, LinkProps } from "./link";

export type LinkButtonProps = LinkProps & ButtonProps & StyledButtonProps;

/**
 * Links allow users to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
export const ButtonLink: FC<LinkButtonProps> = ({
  children,
  kind = "tertiary",
  size = "default",
  className = "",
  to,
  replace,
  innerRef,
  component,
  route,
  prefetch,
  href,
  external,
  target,
  textDecoration = "none",
  download,
  ...props
}) => {
  return (
    <Button className={className} kind={kind} size={size} {...props}>
      <Link
        to={to}
        replace={replace}
        innerRef={innerRef}
        component={component}
        role="button"
        textDecoration={textDecoration}
        prefetch={prefetch}
        route={route}
        external={external}
        target={target}
        href={href}
        download={download}
      >
        {children}
      </Link>
    </Button>
  );
};

export default ButtonLink;
