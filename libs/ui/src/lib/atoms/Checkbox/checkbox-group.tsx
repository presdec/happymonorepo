import { useActor, useInterpret, useSelector } from "@xstate/react";
import {
  createContext,
  FC,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { createMachine, InterpreterFrom, State } from "xstate";

import { Flex } from "../View";
import { Checkbox } from "./checkbox";
import { CheckboxIndicatorProps, CheckboxProps } from "./primitive/checkbox";
import { StatefulCheckbox } from "./stateful-checkbox";

export type CheckboxGroupProps = Required<
  Pick<CheckboxProps, "checked" | "onCheckedChange">
> &
  CheckboxIndicatorProps;

// type CheckboxGroupScope = CheckboxGroupProps & {
//   values: number[];
//   // onValueChange: Dispatch<SetStateAction<number[]>>;
// };
type CheckboxContext = Record<string, unknown>;
// {

// elapsed: number;
// }

type CheckboxEvent = { type: "SELECTED" } | { type: "UNSELECTED" };

const checkboxGroupMachine = createMachine<CheckboxContext, CheckboxEvent, any>(
  {
    // Machine identifier
    id: "checkboxGroup",

    // Initial state
    initial: "indeterminate",

    // Local context for entire machine
    context: {
      // elapsed: 0,
      // direction: "east",
    },

    // State definitions
    states: {
      indeterminate: {
        on: {
          SELECTED: "checked",
          UNSELECTED: "unchecked",
        },
      },
      checked: {
        on: {
          UNSELECTED: "unchecked",
        },
      },
      unchecked: {
        on: {
          SELECTED: "checked",
        },
      },
    },
  }
);

// const IndeterminateCheckbox = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef()
//     const resolvedRef = ref || defaultRef

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate
//     }, [resolvedRef, indeterminate])

//     return <input type="checkbox" ref={resolvedRef} {...rest} />
//   }
// )

type StateGroup = State<CheckboxContext, CheckboxEvent, any>;

const indeterminateSelector = (state: StateGroup) => {
  return state.matches("indeterminate");
};

const CheckboxGroupContext = createContext(
  {} as InterpreterFrom<typeof checkboxGroupMachine>
);

export const CheckboxGroupItem: FC = ({ children }) => {
  const checkboxGroupService = useContext(CheckboxGroupContext);

  const isIndeterminate = useSelector(
    checkboxGroupService,
    indeterminateSelector
  );

  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={(checked) => {
        setChecked(checked);
        checkboxGroupService.send(checked ? "SELECTED" : "UNSELECTED");
      }}
    >
      {children}
    </Checkbox>
  );
};

export const CheckboxGroupRoot: FC<any> = ({
  children,
  // initialValue,
  // onFinalChange,
  // valueFormatter,
}) => {
  const ref = useRef(null);
  // const [values, setState] = useStatefulSlider(initialValue);

  // const value = useMemo(
  //   () => ({
  //     values,
  //     onValueChange: setState,
  //     onFinalChange,
  //     valueFormatter,
  //   }),
  //   [values, setState, onFinalChange, valueFormatter]
  // );
  const checkboxGroupService = useInterpret(checkboxGroupMachine);

  return (
    <CheckboxGroupContext.Provider value={checkboxGroupService}>
      {/* <div ref={ref}>{children}</div> */}
      {children}
    </CheckboxGroupContext.Provider>
  );
};

const GroupCheckbox: FC<any> = ({
  children,
  // checked,
  // onCheckedChange,
}) => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate"
  );
  const checkboxGroupService = useContext(CheckboxGroupContext);

  return (
    <StatefulCheckbox
      checked={checked}
      onCheckedChange={(checked) => {
        setChecked(checked);
        checkboxGroupService.send(checked ? "SELECTED" : "UNSELECTED");
      }}
    >
      {children}
    </StatefulCheckbox>
  );
};

//TODO: Needs finishing the logic

export const CheckboxGroup: FC<any> = ({
  children,
  groupName,
  checked,
  gap,
  onCheckedChange,
}) => {
  return (
    <CheckboxGroupRoot>
      <Flex flexDirection="column" gap={gap || "1em"}>
        <GroupCheckbox checked={checked} onCheckedChange={onCheckedChange}>
          {groupName || "Group Name"}
        </GroupCheckbox>
        <Flex
          marginLeft={gap || "1em"}
          flexDirection="column"
          gap={gap || "1em"}
        >
          {children}
        </Flex>
      </Flex>
    </CheckboxGroupRoot>
  );
};

export default CheckboxGroup;
