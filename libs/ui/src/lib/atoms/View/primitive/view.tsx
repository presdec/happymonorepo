import type * as Radix from "@radix-ui/react-primitive";
import { Primitive } from "@radix-ui/react-primitive";
import { forwardRef } from "react";

/* -------------------------------------------------------------------------------------------------
 * View
 * -----------------------------------------------------------------------------------------------*/
type ViewItemElement = React.ElementRef<typeof Primitive.div>;
type PrimitiveViewProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;

export interface ViewProps extends PrimitiveViewProps {
  className?: string;
}

const VIEW_NAME = "View";

/**
 * `View` is a box with standard layout props.
 */
export const View = forwardRef<ViewItemElement, ViewProps>(
  (props, forwardedRef) => {
    const { className = "", children, ...viewProps } = props;

    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <Primitive.div className={className} {...viewProps} ref={forwardedRef}>
        {children}
      </Primitive.div>
    );
  }
);

View.displayName = VIEW_NAME;

export default {
  Root: View,
};
