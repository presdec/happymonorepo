import { faCircleNotch, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { forwardRef, Fragment, Ref, useEffect, useState } from "react";

import { Icon } from "../Icon";
import { CustomInputProps as InputProps } from "../Input";
import { Tag } from "../Tag";
import {
  ComboBoxOptionProps as PrimitiveComboBoxOptionProps,
  ComboBoxRootProps as PrimitiveComboBoxRootProps,
  Transition,
} from "./primitive/combo-box";
import {
  SelectProps,
  TSelectOptions,
  TSelectOptionsProps,
} from "./primitive/radix-select";
import {
  StyledComboBoxButton,
  StyledComboBoxContainer,
  StyledComboBoxInput,
  StyledComboBoxItemIndicator,
  StyledComboBoxItemText,
  StyledComboBoxLabel,
  StyledComboBoxOption,
  StyledComboBoxOptions,
  StyledComboBoxRoot,
  StyledItemIndicator,
  StyledSelectContentMessage,
  StyledSelectedItemsRoot,
} from "./styled-components";

export type {
  ComboBoxButtonProps,
  ComboBoxInputProps,
  ComboBoxLabelProps,
  ComboBoxOptionProps,
  ComboBoxOptionsProps,
  ComboBoxRootProps,
} from "./primitive/combo-box";

export const ComboBoxRoot = StyledComboBoxRoot;
export const ComboBoxInput = StyledComboBoxInput;
export const ComboBoxButton = StyledComboBoxButton;
export const ComboBoxLabel = StyledComboBoxLabel;
export const ComboBoxOptions = StyledComboBoxOptions;
export const ComboBoxContainer = StyledComboBoxContainer;
export const ComboBoxSelectedItemsRoot = StyledSelectedItemsRoot;
export const ComboBoxContentMessage = StyledSelectContentMessage;
export const ComboBoxItemText = StyledComboBoxItemText;
export const ComboBoxItemIndicator = StyledComboBoxItemIndicator;

export const ComboBoxOption = forwardRef(
  (
    { children, icon, disabled, ...props }: PrimitiveComboBoxOptionProps,
    forwardedRef?: Ref<HTMLDivElement>
  ) => {
    return (
      <StyledComboBoxOption
        className={({ active }: { active?: boolean }) =>
          `relative cursor-default select-none py-2 pl-10 pr-4 ${
            active ? "bg-teal-600 text-white" : "text-gray-900"
          }`
        }
        disabled={disabled}
        {...props}
        ref={forwardedRef}
      >
        {({ selected, active }: { selected?: boolean; active?: boolean }) => (
          <>
            <ComboBoxItemText
              className={`block truncate ${
                selected ? "font-medium" : "font-normal"
              }`}
            >
              {children}
            </ComboBoxItemText>
            {selected ? (
              <ComboBoxItemIndicator
                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                  active ? "text-white" : "text-teal-600"
                }`}
              >
                {icon ? icon() : <CheckIcon aria-hidden="true" />}
              </ComboBoxItemIndicator>
            ) : null}
          </>
        )}
      </StyledComboBoxOption>
    );
  }
);

ComboBoxOption.displayName = "ComboBoxOption";

export type ComboBoxProps = SelectProps &
  InputProps &
  PrimitiveComboBoxRootProps;

const contains = (text: string | string[], subString: string) =>
  text.includes(subString.toLowerCase());

const isMulti = (
  selectedOptions: TSelectOptions | TSelectOptions[]
): selectedOptions is TSelectOptions[] =>
  Array.isArray(selectedOptions as TSelectOptions[]);

export const ComboBox = forwardRef(
  (
    {
      children,
      options = [],
      multi,
      value,
      onChange = () => ({}),
      onValueChange = () => ({}),
      defaultValue,
      loadingEnhancer = () => (
        <Icon icon={faCircleNotch} label="loading" color="currentColor" />
      ),
      startEnhancer = () => (
        <Icon icon={faSearch} label="search" color="currentColor" />
      ),
      endEnhancer,
      isLoading,
      disabled,
      autoComplete = "off",
      searchable,
      name,
      ...props
    }: ComboBoxProps,
    forwardedRef?: Ref<HTMLButtonElement>
  ) => {
    if (process.env.NODE_ENV === "development" && children) {
      console.warn(
        "[ComboBox]: Children wil not be used, please use the 'options' prop"
      );
    }
    const initialState =
      options.find((el) => el.id === defaultValue || el.id === value) ||
      options[0];

    const multiInitialState = options?.filter((el) => value?.includes(el.id));

    const [selectedOptions, setSelectedOptions] = useState(
      multi ? multiInitialState : initialState
    );

    const [query, setQuery] = useState("");

    const filteredOptions =
      query === ""
        ? options
        : options?.filter(
            (option) =>
              contains(option.id.toLowerCase(), query) ||
              contains(option.label.toLowerCase(), query)
          );

    useEffect(() => {
      if (value) {
        // if (isMulti(selectedOptions)) {
        // const valued = value.map((el) => ({
        //   id: el,
        //   label: options.find((el) => el.id === value)?.label,
        // }));
        //   if (valued) {
        //     setSelectedOptions(valued);
        //   }
        // }

        if (!isMulti(selectedOptions)) {
          const valued = options.find((el) => el.id === value);
          if (valued) {
            setSelectedOptions(valued);
          }
        }
      }
    }, [value, setSelectedOptions, options, selectedOptions]);

    return (
      <ComboBoxRoot
        value={selectedOptions}
        onChange={(value: TSelectOptions | TSelectOptions[]) => {
          if (isMulti(value)) {
            setSelectedOptions(value);
            onValueChange(value.map((el) => el.id));
          }

          if (!isMulti(value)) {
            setSelectedOptions(value);
            onValueChange(value.id);
          }
        }}
        ref={forwardedRef}
        autoComplete={autoComplete}
        multiple={multi}
        name={name}
        disabled={disabled}
        {...props}
      >
        <div className="relative mt-1">
          <ComboBoxContainer>
            <ComboBoxInput
              displayValue={(option: TSelectOptions) => {
                return option.label;
              }}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setQuery(event.currentTarget.value)
              }
              endEnhancer={endEnhancer}
              startEnhancer={startEnhancer}
              loadingEnhancer={loadingEnhancer}
              isLoading={isLoading}
              disabled={disabled}
              autoComplete={autoComplete}
              //TODO: This cases a layout shift that is visually not nice
              // clearable={!!query}
              // onClearClick={() => {
              //   setQuery("");
              // }}
              Before={() => {
                return multi &&
                  isMulti(selectedOptions) &&
                  selectedOptions.length ? (
                  <ComboBoxSelectedItemsRoot>
                    {selectedOptions?.length > 0 &&
                    selectedOptions?.length <= 3 ? (
                      selectedOptions.map((item) => {
                        return (
                          <Tag
                            key={item.id}
                            onClick={() => {
                              const filtered = selectedOptions.filter(
                                (option) => option.id !== item.id
                              );
                              setQuery("");

                              setSelectedOptions(filtered);

                              onValueChange(filtered.map((el) => el.id));
                            }}
                          >
                            {/* <ComboBoxValue multi={multi} searchable={searchable} /> */}
                            {item.label}
                          </Tag>
                        );
                      })
                    ) : selectedOptions?.length > 3 ? (
                      <ComboBoxContentMessage>
                        Selected {selectedOptions?.length} items
                      </ComboBoxContentMessage>
                    ) : null}
                  </ComboBoxSelectedItemsRoot>
                ) : null;
              }}
            />
            <ComboBoxButton disabled={disabled}>
              <ChevronDownIcon aria-hidden="true" />
            </ComboBoxButton>
          </ComboBoxContainer>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboBoxOptions>
              {filteredOptions.length === 0 && query !== "" ? (
                <div>Nothing found.</div>
              ) : (
                filteredOptions.map((item) => {
                  return (
                    <ComboBoxOption
                      value={item}
                      key={item.id}
                      icon={item.icon}
                      disabled={item.disabled}
                    >
                      {item.label}
                    </ComboBoxOption>
                  );
                })
              )}
            </ComboBoxOptions>
          </Transition>
        </div>
      </ComboBoxRoot>
    );
  }
);

ComboBox.displayName = "ComboBox";

export default ComboBox;
