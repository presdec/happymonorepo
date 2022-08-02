import { nanoid } from "@reduxjs/toolkit";
import { FC, useEffect, useState } from "react";

import { Checkbox, CheckboxProps } from "./checkbox";

//AC: We force state to be given to the component;
export type StatefulCheckboxProps = CheckboxProps &
  Required<Pick<CheckboxProps, "checked" | "onCheckedChange">>;

export const useStatefulCheckbox = (
  checked: StatefulCheckboxProps["checked"] = false
) => {
  const [state, setState] = useState(checked);

  return [state, setState] as const;
};

export const StatefulCheckbox: FC<StatefulCheckboxProps> = ({
  children,
  //TODO: replace with useId in React 18
  id = nanoid(),
  forceMount,
  checked,
  onCheckedChange,
  ...props
}) => {
  const [localChecked, setLocalChecked] = useStatefulCheckbox(checked);

  //AC: We track if the value from outside has changed, like during a fetch event. If this happens then we update the internal state.
  useEffect(() => {
    setLocalChecked(checked);
  }, [checked, setLocalChecked]);

  return (
    <Checkbox
      checked={localChecked}
      onCheckedChange={(value) => {
        setLocalChecked(value);
        onCheckedChange(value);
      }}
      {...props}
    >
      {children}
    </Checkbox>
  );
};

export default StatefulCheckbox;
