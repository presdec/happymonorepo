import {
  ImperativeMethods,
  Option as SelectOption,
  OptionsT as SelectOptionsT,
  Select as BaseUISelect,
  SelectProps as BaseUISelectProps,
  StatefulSelect as BaseUIStatefulSelect,
  Value as SelectValue,
} from "baseui/select";
import { forwardRef, Ref } from "react";

import { Primitive } from "../../../radix-utils";

export type SelectProps = BaseUISelectProps;

type StatefulSelectImplElement = React.ElementRef<
  typeof Primitive.div | typeof Primitive.input
>;

/**
 *
 * @deprecated Use radix select
 */
export const Select = forwardRef<StatefulSelectImplElement, BaseUISelectProps>(
  (props, forwardedRef) => {
    return (
      <BaseUISelect
        {...props}
        controlRef={forwardedRef as Ref<ImperativeMethods>}
      />
    );
  }
);

Select.displayName = "Select";

/**
 *
 * @deprecated Use radix select
 */
export const StatefulSelect = forwardRef<
  StatefulSelectImplElement,
  BaseUISelectProps
>((props, forwardedRef) => {
  return (
    <BaseUIStatefulSelect
      {...props}
      controlRef={forwardedRef as Ref<ImperativeMethods>}
    />
  );
});

StatefulSelect.displayName = "StatefulSelect";

export type { SelectOption, SelectOptionsT, SelectValue };
export { SIZE as SELECT_SIZE, TYPE as SELECT_TYPE } from "baseui/select";

export default Select;
