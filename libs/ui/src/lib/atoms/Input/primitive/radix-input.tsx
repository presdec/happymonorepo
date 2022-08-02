/* eslint-disable react/jsx-pascal-case */
import type * as Radix from "@radix-ui/react-primitive";
import * as React from "react";
import {
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  HTMLInputTypeAttribute,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import InputMask, { Props as InputMaskProps } from "react-input-mask";

import { Primitive } from "../../../radix-utils";

export type SharedInputPropsT = {
  /** Renders UI in 'focus' state */
  isFocused?: boolean;
  /** Renders UI in 'readOnly' state */
  isReadOnly?: boolean;
  /** Renders UI in 'disabled' state */
  disabled?: boolean;
  /** Renders UI in 'error' state */
  error?:
    | boolean
    | string
    | React.ReactNode
    | ((props: Record<string, unknown>) => React.ReactNode);
  /** Renders UI in 'positive' state */
  positive?:
    | boolean
    | string
    | React.ReactNode
    | ((props: Record<string, unknown>) => React.ReactNode);
  /** Renders UI in 'required' state */
  required?: boolean;
  /** Defines if has a clearable or MaskToggleButton at the end */
  hasIconTrailing?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** Show loading button style and spinner. */
  isLoading?: boolean;
};

/* -------------------------------------------------------------------------------------------------
 * InputRoot
 * -----------------------------------------------------------------------------------------------*/

type InputRootImplElement = React.ElementRef<typeof Primitive.div>;

type PrimitiveInputRootProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;

export type InputRootProps = SharedInputPropsT &
  PrimitiveInputRootProps & {
    id?: string;

    /** Handler for the `focus` event. */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /** Handler for the `blur` event. */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    // onClear?: (e: SyntheticEvent<HTMLInputElement>) => void;
    /** If true, adds a clear value icon button to the end of the input container. */
    clearable?: boolean;
    /** If undefined or true, clears the input when the Escape button is pressed with the input focused. True by default. */
    clearOnEscape?: boolean;
    /** A  hint as to the type of data that might be entered by the user while editing the element or its contents. */
    inputMode?: string;
    // /** Determines if browser should provide value suggestions. */
    // autoComplete?: string;

    /** Renders component in 'readOnly' state. */
    readOnly?: boolean;
    /** If true the input will be focused on the first mount. */
    autoFocus?: boolean;
  };

const INPUT_ROOT_NAME = "InputRoot";

export const InputRoot = forwardRef<InputRootImplElement, InputRootProps>(
  (props, forwardedRef) => {
    const {
      children,
      disabled,
      readOnly,
      autoFocus,
      onFocus = () => ({}),
      onBlur = () => ({}),
      ...inputRootProps
    } = props;
    /**
     * This "Stateless" input still has state. This is private state that
     * customers shouldn't have to manage themselves, such as input's focus state.
     */
    const [isFocused, setIsFocused] = useState(
      (autoFocus && !readOnly) || false
    );

    const onRootFocusHandler = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (!readOnly) {
          setIsFocused(true);
          onFocus(e);
        }
      },
      [onFocus, readOnly]
    );

    const onRootBlurHandler = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (!readOnly) {
          setIsFocused(false);
          onBlur(e);
        }
      },
      [onBlur, readOnly]
    );

    return (
      <Primitive.div
        data-id="input-root"
        data-disabled={disabled ? "" : undefined}
        data-focused={isFocused ? "" : undefined}
        {...inputRootProps}
        ref={forwardedRef}
      >
        {typeof children === "function"
          ? children({
              onRootFocusHandler,
              onRootBlurHandler,
              isFocused,
            })
          : null}
      </Primitive.div>
    );
  }
);

export type SharedRootReturnProps = {
  onRootFocusHandler: (e: FocusEvent<HTMLInputElement>) => void;
  onRootBlurHandler: (e: FocusEvent<HTMLInputElement>) => void;
  isFocused: boolean;
};

InputRoot.displayName = INPUT_ROOT_NAME;

/* -------------------------------------------------------------------------------------------------
 * InputContainer
 * -----------------------------------------------------------------------------------------------*/

type InputContainerImplElement = React.ElementRef<typeof Primitive.div>;

type PrimitiveInputContainerProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;

export type InputContainerProps = SharedInputPropsT &
  PrimitiveInputContainerProps & {
    id?: string;
  };

const INPUT_CONTAINER_NAME = "InputContainer";

export const InputContainer = forwardRef<
  InputContainerImplElement,
  InputContainerProps
>((props, forwardedRef) => {
  const {
    children,
    disabled,
    isFocused,
    error,
    positive,
    ...inputContainerProps
  } = props;

  return (
    <Primitive.div
      data-id="input-container"
      data-disabled={disabled ? "" : undefined}
      data-focused={isFocused ? "" : undefined}
      data-error={error ? "" : undefined}
      data-positive={positive ? "" : undefined}
      {...inputContainerProps}
      ref={forwardedRef}
    >
      {children}
    </Primitive.div>
  );
});

InputContainer.displayName = INPUT_CONTAINER_NAME;

/* -------------------------------------------------------------------------------------------------
 * Input
 * -----------------------------------------------------------------------------------------------*/

type InputImplElement = React.ElementRef<typeof Primitive.input>;

type PrimitiveInputProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.input
>;

export type InputProps = PrimitiveInputProps & BaseInputProps;

const INPUT_NAME = "Input";

export const Input = forwardRef<InputImplElement, InputProps>(
  (props, forwardedRef) => {
    const {
      children,
      value,
      onChange,
      isFocused,
      autoComplete = "on",
      autoFocus = false,
      disabled = false,
      error = false,
      positive = false,
      name = "",
      inputMode = "text",
      pattern,
      placeholder = "",
      required = false,
      role,
      type = "text",
      readOnly = false,
      ...inputProps
    } = props;

    return (
      <Primitive.input
        data-focused={isFocused ? "" : undefined}
        data-id="input"
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        // data-error ={error}
        // data-positive = {positive}
        name={name}
        inputMode={inputMode}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        role={role}
        type={type}
        readOnly={readOnly}
        {...inputProps}
        ref={forwardedRef}
      >
        {children}
      </Primitive.input>
    );
  }
);

Input.displayName = INPUT_NAME;

/* -------------------------------------------------------------------------------------------------
 * BaseInput
 * -----------------------------------------------------------------------------------------------*/
type BaseInputImplElement = React.ElementRef<typeof Primitive.input>;

type PrimitiveBaseInputProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.input
>;

export interface BaseInputBaseProps extends PrimitiveBaseInputProps {
  id?: string;
}

export type BaseInputProps = BaseInputBaseProps &
  SharedInputPropsT & {
    /** Id attribute value to be added to the input element and as a label's for attribute value. */
    id?: string;
    // "aria-activedescendant"?: string;
    // "aria-autocomplete"?: string;
    // "aria-controls"?: string;
    // /** Id of element which contains a related error message */
    // "aria-errormessage"?: string;
    // /** Sets aria-haspopup attribute. */
    // "aria-haspopup"?: string;
    // /** Sets aria-label attribute. */
    // "aria-label"?: string;
    // /** Sets aria-labelledby attribute. */
    // "aria-labelledby"?: string;
    // /** Sets aria-describedby attribute. */
    // "aria-describedby"?: string;
    /** Determines if browser should provide value suggestions. */
    autoComplete?: string;

    /** If true, adds a clear value icon button to the end of the input container. */
    clearable?: boolean;
    /** If undefined or true, clears the input when the Escape button is pressed with the input focused. True by default. */
    clearOnEscape?: boolean;
    /** Renders component in 'required' state. */
    required?: boolean;
    /** Input type attribute. */
    type?: string | "textarea";
    /** Input value attribute. */
    value?: string | number;
    rows?: number;
  };

const BASE_INPUT_NAME = "BaseInput";

const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  // eslint-disable-next-line id-blacklist
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true,
};

/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */
function focusTriggersKeyboardModality(node: {
  type: keyof typeof inputTypesWhitelist;
  tagName: string;
  readOnly: boolean;
  isContentEditable: boolean;
}) {
  const { type, tagName } = node;

  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}

const hadKeyboardEvent = true;

export function isFocusVisible(event: any) {
  try {
    return event.target.matches(":focus-visible");
  } catch (error) {
    // browsers not implementing :focus-visible will throw a SyntaxError
    // we use our own heuristic for those browsers
    // rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  }

  // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only
  return hadKeyboardEvent || focusTriggersKeyboardModality(event.target);
}

/** A safe way to create event objects down to IE11 */
function createEvent(eventName: string) {
  let event;
  if (typeof window.Event === "function") {
    event = new window.Event(eventName, { bubbles: true, cancelable: true });
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, true, true);
  }
  return event;
}

/**
 *
 * If the type prop is equal to "password" we allow the user to toggle between
 * masked and non masked text. Internally, we toggle between type "password"
 * and "text".
 */
const getInputType = (type: string, isMasked: boolean) => {
  if (type === "password") {
    return isMasked ? "password" : "text";
  } else {
    return type;
  }
};

/**
 * `InputEnhancer` handles visibility and animations for any a `enhancer` used in `Input`.
 */
export const BaseInput = React.forwardRef<BaseInputImplElement, BaseInputProps>(
  (props, forwardedRef) => {
    const {
      children,
      autoComplete = "on",
      autoFocus = false,
      error = false,
      positive = false,
      onBlur = () => ({}),
      onFocus = () => ({}),
      clearable = false,
      clearOnEscape = true,
      required = false,
      type = "text",
      readOnly = false,
      value,
      rows,
      ...baseInputProps
    } = props;

    const ref = React.useRef<HTMLInputElement>(null);

    //TODO: refine types
    const inputRef = (forwardedRef as any) || ref;

    const initialType = useRef(type);
    const [isFocused, setIsFocused] = useState(autoFocus || false);
    const [isMasked, setIsMasked] = useState(type === "password");
    const [isFocusVisibleForClear, setIsFocusVisibleForClear] = useState(false);
    const [isFocusVisibleForMaskToggle, setIsFocusVisibleForMaskToggle] =
      useState(false);

    // more here https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#Preventing_autofilling_with_autocompletenew-password
    const autoCompleteFlag =
      initialType?.current === "password" && autoComplete === "new-password"
        ? "new-password"
        : autoComplete;

    const handleFocusForClear = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        if (isFocusVisible(event)) {
          setIsFocusVisibleForClear(true);
        }
      },
      []
    );

    const handleBlurForClear = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        if (isFocusVisibleForClear !== false) {
          setIsFocusVisibleForClear(false);
        }
      },
      [isFocusVisibleForClear]
    );

    const handleFocusForMaskToggle = useCallback(
      (event: FocusEventHandler<HTMLButtonElement>) => {
        if (isFocusVisible(event)) {
          setIsFocusVisibleForMaskToggle(true);
        }
      },
      []
    );

    const handleBlurForMaskToggle = useCallback(
      (event: FocusEventHandler<HTMLButtonElement>) => {
        if (isFocusVisibleForMaskToggle !== false) {
          setIsFocusVisibleForMaskToggle(false);
        }
      },
      [isFocusVisibleForMaskToggle]
    );

    const clearValue = useCallback(() => {
      // trigger a fake input change event (as if all text was deleted)
      const input = inputRef.current;

      if (input) {
        const nativeInputValue = Object.getOwnPropertyDescriptor(
          type === "textarea" //CUSTOM_INPUT_TYPE.textarea
            ? window.HTMLTextAreaElement.prototype
            : window.HTMLInputElement.prototype,
          "value"
        );
        if (nativeInputValue) {
          const nativeInputValueSetter = nativeInputValue.set;
          if (nativeInputValueSetter) {
            nativeInputValueSetter.call(input, "");
            const event = createEvent("input");
            input.dispatchEvent(event);
          }
        }
      }
    }, [inputRef, type]);

    const onInputKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (
          clearOnEscape &&
          e.key === "Escape" &&
          inputRef.current &&
          !readOnly
        ) {
          clearValue();
          // prevent event from closing modal or doing something unexpected
          e.stopPropagation();
        }
      },
      [clearOnEscape, clearValue, inputRef, readOnly]
    );

    const onClearIconClick = useCallback(() => {
      if (inputRef.current) clearValue();
      // return focus to the input after click
      if (inputRef.current) inputRef.current.focus();
    }, [clearValue, inputRef]);

    const onBaseFocusHandler = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (!readOnly) {
          setIsFocused(true);
          onFocus(e);
        }
      },
      [onFocus, readOnly]
    );

    const onBaseBlurHandler = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (!readOnly) {
          setIsFocused(false);
          onBlur(e);
        }
      },
      [onBlur, readOnly]
    );

    const onMaskToggle = useCallback((value?: boolean) => {
      setIsMasked((prevState) => !prevState);
    }, []);

    const inputType = getInputType(type, isMasked);

    useEffect(() => {
      const innerRef = inputRef?.current;
      if (inputRef.current) {
        if (autoFocus) {
          inputRef.current.focus();
        }

        if (clearable) {
          inputRef.current.addEventListener("keydown", onInputKeyDown);
        }
      }

      return () => innerRef?.removeEventListener("keydown", onInputKeyDown);
    }, [autoFocus, clearable, inputRef, onInputKeyDown]);

    const text = type === "textarea" ? value : null;

    return (
      // <Primitive.span {...inputEnhancerProps} ref={forwardedRef}>
      //   {children}
      // </Primitive.span>
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <React.Fragment>
        {typeof children === "function"
          ? children({
              "aria-invalid": error,
              "aria-required": required,
              inputRef,
              onBaseBlurHandler,
              onBaseFocusHandler,
              inputType,
              autoCompleteFlag,
              text,
              autoComplete: autoCompleteFlag,
              inputRows: type === "textarea" ? rows : null,
              isBaseFocused: isFocused,
              onClearIconClick,
              isFocusVisibleForClear,
              handleFocusForClear,
              handleBlurForClear,
              handleFocusForMaskToggle,
              handleBlurForMaskToggle,
              isFocusVisibleForMaskToggle,
              onMaskToggle,
              isMasked,
              inputError: error,
              inputPositive: positive,
              ...baseInputProps,
            })
          : null}
      </React.Fragment>
    );
  }
);

export type SharedBaseInputReturnProps = {
  "aria-invalid": boolean;
  "aria-required": boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  onBaseBlurHandler: (e: FocusEvent<HTMLInputElement>) => void;
  onBaseFocusHandler: (e: FocusEvent<HTMLInputElement>) => void;
  autoCompleteFlag: string;
  text?: string | number;
  inputType: string;
  inputRows?: number;
  isBaseFocused: boolean;
  onClearIconClick: () => void;
  isFocusVisibleForClear: boolean;
  isFocusVisibleForMaskToggle: boolean;
  handleFocusForClear: (event: FocusEvent<HTMLInputElement>) => void;
  handleBlurForClear: (event: FocusEvent<HTMLInputElement>) => void;
  handleFocusForMaskToggle: FocusEventHandler<HTMLButtonElement>;
  handleBlurForMaskToggle: FocusEventHandler<HTMLButtonElement>;
  onMaskToggle: (value?: boolean) => void;
  isMasked?: boolean;
  inputError?: boolean;
  inputPositive?: boolean;
};

BaseInput.displayName = BASE_INPUT_NAME;

/* -------------------------------------------------------------------------------------------------
 * InputEnhancer
 * -----------------------------------------------------------------------------------------------*/
type InputEnhancerImplElement = React.ElementRef<typeof Primitive.span>;

type PrimitiveInputEnhancerProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.span
>;

export interface InputEnhancerBaseProps extends PrimitiveInputEnhancerProps {
  id?: string;
}

export type InputEnhancerProps = SharedInputPropsT &
  InputEnhancerBaseProps & {
    type?: "none" | "loading";
  };

const INPUT_ENHANCER_NAME = "InputEnhancer";

/**
 * `InputEnhancer` handles visibility and animations for any a `enhancer` used in `Input`.
 */
export const InputEnhancer = React.forwardRef<
  InputEnhancerImplElement,
  InputEnhancerProps
>((props, forwardedRef) => {
  const {
    children,
    disabled,
    isFocused,
    isLoading,
    type = "none",
    ...inputEnhancerProps
  } = props;

  return children ? (
    <Primitive.span
      data-disabled={disabled ? "" : undefined}
      data-focused={isFocused ? "" : undefined}
      data-loading={isLoading ? "true" : "false"}
      data-loader={type === "loading" ? "true" : "false"}
      {...inputEnhancerProps}
      ref={forwardedRef}
    >
      {typeof children === "function" ? children(props) : null}
    </Primitive.span>
  ) : null;
});

InputEnhancer.displayName = INPUT_ENHANCER_NAME;

/* -------------------------------------------------------------------------------------------------
 * ClearTriggerContainer
 * -----------------------------------------------------------------------------------------------*/
type ClearTriggerContainerImplElement = React.ElementRef<typeof Primitive.div>;

type PrimitiveClearTriggerContainerProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;

export interface ClearTriggerContainerBaseProps
  extends PrimitiveClearTriggerContainerProps {
  id?: string;
}

export type ClearTriggerContainerProps = SharedInputPropsT &
  InputEnhancerBaseProps & { id?: string };

const CLEAR_TRIGGER_CONTAINER_NAME = "InputEnhancer";

/**
 * `ClearTriggerContainer`.
 */
export const ClearTriggerContainer = React.forwardRef<
  ClearTriggerContainerImplElement,
  ClearTriggerContainerProps
>((props, forwardedRef) => {
  const { children, ...inputEnhancerProps } = props;

  return (
    <Primitive.div {...inputEnhancerProps} ref={forwardedRef}>
      {children}
    </Primitive.div>
  );
});

ClearTriggerContainer.displayName = CLEAR_TRIGGER_CONTAINER_NAME;

/* -------------------------------------------------------------------------------------------------
 * ClearTrigger
 * -----------------------------------------------------------------------------------------------*/
type ClearTriggerImplElement = React.ElementRef<typeof Primitive.span>;

type PrimitiveClearTriggerProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.span
>;

export interface ClearTriggerBaseProps extends PrimitiveClearTriggerProps {
  id?: string;
}

export type ClearTriggerProps = SharedInputPropsT &
  ClearTriggerBaseProps & {
    id?: string;
    /** If true, adds a clear value icon button to the end of the input container. */
    clearable?: boolean;
    /** Renders component in 'readOnly' state. */
    readOnly?: boolean;
    value?: string;
    onClick: () => void;
    isFocusVisible?: boolean;
    /** Handler for the `focus` event. */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /** Handler for the `blur` event. */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  };

const CLEAR_TRIGGER_NAME = "ClearTrigger";

const forkFocus =
  (rootProps: any, handler: (e: FocusEvent<HTMLInputElement>) => void) =>
  (e: FocusEvent<HTMLInputElement>) => {
    if (typeof rootProps.onFocus === "function") {
      rootProps.onFocus(e);
    }
    handler(e);
  };

const forkBlur =
  (rootProps: any, handler: (e: FocusEvent<HTMLInputElement>) => void) =>
  (e: FocusEvent<HTMLInputElement>) => {
    if (typeof rootProps.onBlur === "function") {
      rootProps.onBlur(e);
    }
    handler(e);
  };

/**
 * `ClearTrigger` handles removing text from the Input.
 */
export const ClearTrigger = React.forwardRef<
  ClearTriggerImplElement,
  ClearTriggerProps
>((props, forwardedRef) => {
  const {
    children,
    clearable,
    value,
    disabled,
    readOnly,
    onClick,
    isFocusVisible,
    onFocus = () => ({}),
    onBlur = () => ({}),
    ...clearTriggerProps
  } = props;

  if (
    disabled ||
    readOnly ||
    !clearable ||
    value === null ||
    (typeof value === "string" && value.length === 0)
  ) {
    return null;
  }
  const ariaLabel = "Clear value";

  return (
    <Primitive.span
      {...clearTriggerProps}
      ref={forwardedRef}
      tabIndex={0}
      title={ariaLabel}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onClick();
        }
      }}
      role="button"
      data-focus-visible={isFocusVisible}
      onFocus={onFocus}
      onBlur={onBlur}
      // onFocus={forkFocus(clearTriggerProps, onFocus)}
      // onBlur={forkBlur(clearTriggerProps, onBlur)}
      asChild
    >
      {children}
    </Primitive.span>
  );
});

ClearTrigger.displayName = CLEAR_TRIGGER_NAME;

/* -------------------------------------------------------------------------------------------------
 * MaskToggle
 * -----------------------------------------------------------------------------------------------*/
type MaskToggleImplElement = React.ElementRef<typeof Primitive.button>;

type PrimitiveMaskToggleProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.button
>;

export interface MaskToggleBaseProps extends PrimitiveMaskToggleProps {
  id?: string;
}

export type MaskToggleProps = SharedInputPropsT &
  Omit<MaskToggleBaseProps, "type" | "onFocus" | "onBlur"> & {
    id?: string;
    type?: HTMLInputTypeAttribute | string | "password";
    onMaskToggle?: (value?: boolean) => void;
    onFocus: FocusEventHandler<HTMLButtonElement>;
    onBlur: FocusEventHandler<HTMLButtonElement>;
    isMasked?: boolean;
  };

const MASK_TOGGLE_NAME = "MaskToggle";

/**
 * `MaskToggle`.
 * Input has some built-in logic when you set type to "password". 
 * 
 * A button is added to the right side of the input which, when activated, toggles the masking of the inputʼs current text. 
 * 
 * Allowing users to see the text they have entered is considered a usability best practice so we have built-in this behavior.

* Please note, that by default the component will use the autocomplete="new-password" attribute. 

* You can change that by providing the autoComplete property to the component, like autoComplete="current-password". 

* You can read more about this decision here.
 */
export const MaskToggle = React.forwardRef<
  MaskToggleImplElement,
  MaskToggleProps
>((props, forwardedRef) => {
  const {
    children,
    type,
    isMasked,
    onFocus,
    onBlur,
    onMaskToggle = () => ({}),
    ...maskToggleProps
  } = props;

  if (type !== "password") return null;

  const label = isMasked ? "Show password text" : "Hide password text";

  return (
    <Primitive.button
      {...maskToggleProps}
      aria-label={label}
      onClick={() => onMaskToggle()}
      title={label}
      type="button"
      onFocus={onFocus}
      onBlur={onBlur}
      // onFocus={forkFocus(maskToggleButtonProps, this.handleFocusForMaskToggle)}
      // onBlur={forkBlur(maskToggleButtonProps, this.handleBlurForMaskToggle)}
      ref={forwardedRef}
    >
      {children}

      {/* {this.state.isMasked ? (
        <MaskToggleShowIcon size={iconSize} title={label} {...maskToggleIconShowProps} />
       ) : (
         <MaskToggleHideIcon size={iconSize} title={label} {...maskToggleIconHideProps} />
      )} */}
    </Primitive.button>
  );
});

MaskToggle.displayName = MASK_TOGGLE_NAME;

/* -------------------------------------------------------------------------------------------------
 * MaskedInput
 * -----------------------------------------------------------------------------------------------*/
type MaskedInputImplElement = React.ElementRef<typeof InputMask>;

type PrimitiveMaskedInputProps = Radix.ComponentPropsWithoutRef<
  typeof InputMask
>;

export interface MaskedInputBaseProps extends PrimitiveMaskedInputProps {
  id?: string;
}

export type MaskedInputProps = SharedInputPropsT &
  MaskedInputBaseProps &
  InputMaskProps & {
    id?: string;
    maskChar?: string;
  };

const MASKED_INPUT_NAME = "MaskedInput";

/**
 * `MaskToggle`. Enhances an Input to mask the value with extra markup.
 * 
 * Masking an input can lead to accessibility problems. 
 * 
 * Screen-readers will read out the value of the input on focus and change events. 
 * 
 * With masking, an input's value might make visual sense, but sound strange when read aloud.
 * 
 * Consider if you can format the value of the input on a blur event, rather than on change events. 
 * 
 * This still gives users visual feedback but also provides a much smoother experience for someone using a screen-reader.
 * 
 * Uses https://www.npmjs.com/package/react-input-mask

 */
export const MaskedInput = React.forwardRef<
  MaskedInputImplElement,
  MaskedInputProps
>((props, forwardedRef) => {
  const {
    children,
    mask,
    maskChar,
    onChange,
    onFocus,
    onBlur,
    value,
    disabled,
    readOnly,
    ...maskedInputProps
  } = props;

  return (
    <InputMask
      mask={mask}
      ref={forwardedRef}
      //@ts-expect-error Types are not refined
      maskChar={maskChar}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      {...maskedInputProps}
    >
      {children}
    </InputMask>
  );
});

MaskedInput.displayName = MASKED_INPUT_NAME;

export default {
  Root: InputRoot,
  BaseInput,
  Container: InputContainer,
  Input,
  Enhancer: InputEnhancer,
  ClearTrigger,
  ClearTriggerContainer,
  MaskToggle,
  MaskedInput,
};
