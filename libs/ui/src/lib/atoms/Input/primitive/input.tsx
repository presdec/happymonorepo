import {
  ADJOINED as INPUT_ADJOINED,
  BaseInput,
  BaseInputOverrides,
  BaseInputProps,
  CUSTOM_INPUT_TYPE,
  // ENHANCER_POSITION,
  Input as BaseUIInput,
  InputOverrides,
  InputProps as BaseUIInputProps,
  InternalState as InputInternalState,
  MaskedInput,
  MaskedInputProps,
  SharedProps as InputSharedProps,
  SIZE as INPUT_SIZE,
  State as InputState,
  // STATE_CHANGE_TYPE as INPUT_STATE_CHANGE_TYPE,
  StatefulContainer as InputStatefulContainer,
  StatefulContainerProps as InputStatefulContainerProps,
  StatefulInput,
  StatefulInputProps,
  StyledEndEnhancer as InputStyledEndEnhancer,
  StyledInput,
  StyledInputContainer,
  StyledInputEnhancer,
  StyledRoot as InputStyledRoot,
  StyledStartEnhancer as InputStyledStartEnhancer,
} from "baseui/input";

export type InputProps = BaseUIInputProps;

/**
 * @deprecated Use Radix input instead
 */
export const Input = BaseUIInput;

export type {
  InputStatefulContainerProps,
  BaseInputOverrides,
  BaseInputProps,
  InputOverrides,
  MaskedInputProps,
  // StatefulInputProps,
  InputInternalState,
  InputSharedProps,
  InputState,
};

export {
  InputStatefulContainer,
  InputStyledEndEnhancer,
  InputStyledRoot,
  InputStyledStartEnhancer,
  INPUT_ADJOINED,
  BaseInput,
  CUSTOM_INPUT_TYPE,
  MaskedInput,
  // StatefulInput,
  // StyledInput,
  // StyledInputContainer,
  // StyledInputEnhancer,
  // INPUT_ENHANCER_POSITION,
  INPUT_SIZE,
  // INPUT_STATE_CHANGE_TYPE,
};

/**
 * @deprecated Use Radix input instead
 */
export default Input;
