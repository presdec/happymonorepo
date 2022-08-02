import {
  faEye,
  faEyeSlash,
  faShower,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { ForwardedRef, forwardRef, ReactElement, ReactNode } from "react";

import { Icon } from "../Icon";
import {
  InputProps,
  SharedBaseInputReturnProps,
  SharedInputPropsT,
  SharedRootReturnProps,
} from "./primitive/radix-input";
import {
  InputAdjoinedT,
  StyledClearTrigger,
  StyledClearTriggerContainer,
  StyledInputEnhancer,
  StyledInputRootProps,
  StyledMaskToggleButton,
  StyledRadixBaseInput,
  StyledRadixInput,
  StyledRadixInputContainer,
  StyledRadixInputRoot,
} from "./styled-components";
export type {
  InputProps as RadixBaseInputProps,
  InputRootProps as RadixInputRootProps,
  InputContainerProps as RadixInputContainerProps,
} from "./primitive/radix-input";

export const RadixInputRoot = StyledRadixInputRoot;
export const RadixInput = StyledRadixInput;
export const RadixInputContainer = StyledRadixInputContainer;
export const RadixInputEnhancer = StyledInputEnhancer;
export const RadixBaseInput = StyledRadixBaseInput;
export const RadixClearTriggerContainer = StyledClearTriggerContainer;
export const RadixClearTrigger = StyledClearTrigger;
export const RadixMaskToggle = StyledMaskToggleButton;

export type CustomInputProps = InputProps &
  StyledInputRootProps & {
    /** A helper rendered at the start of the button. */
    startEnhancer?: ReactNode | ((props: SharedInputPropsT) => ReactNode);
    /** A helper rendered at the end of the button. */
    endEnhancer?: ReactNode | ((props: SharedInputPropsT) => ReactNode);
    /** A helper rendered when  button is loading. */
    loadingEnhancer?: ReactNode | ((props: SharedInputPropsT) => ReactNode);
    /** A helper rendered at the end of the button. */
    After?: (props: SharedInputPropsT) => ReactElement | null;
    /** A helper rendered at the end of the button. */
    Before?: (props: SharedInputPropsT) => ReactElement | null;
    onClearClick?: (args?: any) => void;
    "data-error"?: string;
    "data-positive"?: string;
  };

function getAdjoinedProp(
  startEnhancer: CustomInputProps["startEnhancer"],
  endEnhancer: CustomInputProps["endEnhancer"]
): InputAdjoinedT {
  if (isEnhancer(startEnhancer) && isEnhancer(endEnhancer)) {
    return "both";
  } else if (isEnhancer(startEnhancer)) {
    return "left";
  } else if (isEnhancer(endEnhancer)) {
    return "right";
  }
  return "none";
}

const isEnhancer = (
  enhancer: CustomInputProps["endEnhancer"] | CustomInputProps["startEnhancer"]
): boolean => Boolean(enhancer || enhancer === 0);

export const CustomInput = forwardRef(
  (
    {
      value,
      onChange,
      startEnhancer = null,
      endEnhancer = null,
      loadingEnhancer = () => (
        <Icon icon={faCircleNotch} label="loading" color="currentColor" />
      ),
      required = false,
      appearance = "default",
      direction = "rtl",
      adjoined = "none",
      autoComplete = "on",
      autoFocus = false,
      disabled = false,
      name = "",
      onBlur = () => ({}),
      onFocus = () => ({}),
      clearable = false,
      type = "text",
      readOnly = false,
      After = (props: SharedInputPropsT) => null,
      Before = (props: SharedInputPropsT) => null,
      error,
      positive,
      clearOnEscape,
      rows,
      isLoading,
      className,
      onClearClick = () => ({}),
      "data-error": dataError,
      "data-positive": dataPositive,
      ...props
    }: CustomInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <RadixInputRoot
        direction={direction}
        required={required}
        appearance={appearance}
        adjoined={getAdjoinedProp(startEnhancer, endEnhancer)}
        hasIconTrailing={clearable || type === "password"}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        className={className}
        data-error={dataError || error ? "" : undefined}
        data-positive={dataPositive || positive ? "" : undefined}
      >
        {({
          onRootFocusHandler,
          onRootBlurHandler,
          isFocused,
        }: SharedRootReturnProps) => {
          return (
            <>
              <RadixInputEnhancer
                position={"start"}
                appearance={appearance}
                disabled={disabled}
                isFocused={isFocused}
              >
                {startEnhancer}
              </RadixInputEnhancer>

              <RadixBaseInput
                rows={rows}
                clearOnEscape={clearOnEscape}
                error={error}
                positive={positive}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                readOnly={readOnly}
                onBlur={onRootBlurHandler}
                onFocus={onRootFocusHandler}
                type={type}
                required={required}
                value={value}
                clearable={clearable}
                ref={forwardedRef}
              >
                {({
                  inputRef,
                  onBaseBlurHandler,
                  onBaseFocusHandler,
                  inputType,
                  autoCompleteFlag,
                  text,
                  isBaseFocused,
                  onClearIconClick,
                  handleFocusForClear,
                  handleBlurForClear,
                  handleFocusForMaskToggle,
                  handleBlurForMaskToggle,
                  isFocusVisibleForClear,
                  isFocusVisibleForMaskToggle,
                  onMaskToggle,
                  inputRows,
                  isMasked,
                  inputError,
                  inputPositive,
                  ...baseInputProps // aria attributes
                }: SharedBaseInputReturnProps) => {
                  return (
                    <RadixInputContainer
                      appearance={appearance}
                      disabled={disabled}
                      isFocused={isBaseFocused}
                      error={inputError}
                      positive={inputPositive}
                    >
                      <Before {...props} />

                      <RadixInput
                        {...props}
                        {...baseInputProps}
                        aria-activedescendant={props["aria-activedescendant"]}
                        aria-autocomplete={props["aria-autocomplete"]}
                        aria-controls={props["aria-controls"]}
                        aria-errormessage={props["aria-errormessage"]}
                        aria-haspopup={props["aria-haspopup"]}
                        aria-label={props["aria-label"]}
                        aria-labelledby={props["aria-labelledby"]}
                        aria-describedby={props["aria-describedby"]}
                        aria-invalid={error ? "true" : undefined}
                        aria-required={required}
                        value={value}
                        onChange={onChange}
                        ref={inputRef}
                        onBlur={onBaseBlurHandler}
                        onFocus={onBaseFocusHandler}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        name={name}
                        type={inputType} //inputType is used internally to switch between hidden password fields an not
                        autoComplete={autoCompleteFlag}
                        appearance={appearance}
                        rows={inputRows}
                      >
                        {text}
                      </RadixInput>
                      <RadixClearTriggerContainer
                        appearance={appearance}
                        alignTop={inputType === "textarea"}
                      >
                        <RadixClearTrigger
                          appearance={appearance}
                          onClick={() => {
                            onClearIconClick();
                            onClearClick();
                          }}
                          clearable={clearable}
                          onBlur={handleBlurForClear}
                          onFocus={handleFocusForClear}
                          isFocusVisible={isFocusVisibleForClear}
                        >
                          <Icon
                            icon={faTimesCircle}
                            label="clear"
                            color="white"
                          ></Icon>
                        </RadixClearTrigger>
                      </RadixClearTriggerContainer>

                      <RadixMaskToggle
                        isFocusVisible={isFocusVisibleForMaskToggle}
                        appearance={appearance}
                        onMaskToggle={onMaskToggle}
                        type={type} // This must be the original type, not inputType
                        isMasked={isMasked}
                        onFocus={handleFocusForMaskToggle}
                        onBlur={handleBlurForMaskToggle}
                      >
                        {isMasked ? (
                          <Icon
                            icon={faEyeSlash}
                            label="clear"
                            color="white"
                          ></Icon>
                        ) : (
                          <Icon icon={faEye} label="clear" color="white"></Icon>
                        )}
                      </RadixMaskToggle>
                      <After {...props} />
                    </RadixInputContainer>
                  );
                }}
              </RadixBaseInput>
              <RadixInputEnhancer isLoading={isLoading} type="loading">
                {loadingEnhancer}
              </RadixInputEnhancer>
              <RadixInputEnhancer
                position={"end"}
                appearance={appearance}
                disabled={disabled}
                isFocused={isFocused}
              >
                {endEnhancer}
              </RadixInputEnhancer>
            </>
          );
        }}
      </RadixInputRoot>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
