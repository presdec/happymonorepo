import { faCircleNotch, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { nanoid } from "@reduxjs/toolkit";
import { forwardRef, ReactNode, Ref, useRef, useState } from "react";
import { useList } from "react-use";

import { LayoutPortal } from "../../organisms/Layouts/modern";
import { useTheme } from "../../themes/use-theme";
import { Icon } from "../Icon";
import { CustomInputProps as InputProps } from "../Input";
import { Tag } from "../Tag";
import {
  Select as SelectPrimitive,
  SelectContentProps,
  SelectItemProps,
  SelectProps,
} from "./primitive/radix-select";
import {
  SelectStyledProps,
  StyledComboBoxContainer,
  StyledComboBoxContent,
  StyledComboBoxInput1,
  StyledComboBoxTrigger,
  StyledItem,
  StyledItemIndicator,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSelectContentInner,
  StyledSelectContentMessage,
  StyledSelectedItemsRoot,
  StyledSelectIcon,
  StyledSelectRoot,
  StyledSelectValue,
  StyledViewport,
} from "./styled-components";

export const ComboBoxRoot = StyledSelectRoot;
export const ComboBoxTrigger = StyledComboBoxTrigger;
export const ComboBoxInput = StyledComboBoxInput1;
export const ComboBoxValue = StyledSelectValue;
export const ComboBoxIcon = StyledSelectIcon;
export const ComboBoxViewport = StyledViewport;
export const ComboBoxItemText = SelectPrimitive.ItemText;
export const ComboBoxItemIndicator = StyledItemIndicator;
export const ComboBoxScrollUpButton = StyledScrollUpButton;
export const ComboBoxScrollDownButton = StyledScrollDownButton;
export const ComboBoxContentInner = StyledSelectContentInner;
export const ComboBoxContentMessage = StyledSelectContentMessage;
export const ComboBoxSelectedItemsRoot = StyledSelectedItemsRoot;
// export const ComboBoxGroup = SelectPrimitive.Group;
// export const ComboBoxLabel = StyledLabel;
// export const ComboBoxSeparator = StyledSeparator;

export type ComboBoxProps = SelectProps & SelectStyledProps & InputProps;

export const ComboBoxContent = ({
  children,
  ...props
}: SelectContentProps & { children?: ReactNode }) => {
  const [{ theme, themeVars, themeClass }] = useTheme();

  //   AC: Since Content is rendered outside of :root, we need to give them css vars again
  return (
    <StyledComboBoxContent {...props}>
      <LayoutPortal
        theme={{
          themeValues: theme,
          themeVars: themeVars,
          themeClass: themeClass,
        }}
      >
        <ComboBoxContentInner>{children}</ComboBoxContentInner>
      </LayoutPortal>
    </StyledComboBoxContent>
  );
};

export const ComboBoxItem = forwardRef(
  (
    { children, icon, ...props }: SelectItemProps,
    forwardedRef?: Ref<HTMLDivElement>
  ) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <ComboBoxItemText>{children}</ComboBoxItemText>
        <ComboBoxItemIndicator>
          {icon ? icon() : <CheckIcon />}
        </ComboBoxItemIndicator>
      </StyledItem>
    );
  }
);

ComboBoxItem.displayName = "ComboBoxItem";

const contains = (text: string | string[], subString: string) =>
  text.includes(subString.toLowerCase());

const startsWith = (text: string, subString: string) =>
  text.startsWith(subString.toLowerCase());

export const ComboBox = forwardRef(
  (
    {
      children,
      positive,
      error,
      appearance = "default",
      ariaLabel,
      triggerIcon = "visible",
      multi,
      loadingEnhancer = () => (
        <Icon icon={faCircleNotch} label="loading" color="currentColor" />
      ),
      startEnhancer = () => (
        <Icon icon={faSearch} label="search" color="currentColor" />
      ),
      endEnhancer,
      isLoading,
      searchable,
      disabled,
      id = `comboBox-${nanoid()}`,
      options = [],
      value,
      onValueChange,
      onChange,
      defaultValue,
      ...props
    }: ComboBoxProps,
    forwardedRef?: Ref<HTMLButtonElement>
  ) => {
    if (process.env.NODE_ENV === "development" && children) {
      console.warn(
        "[ComboBox]: Children wil not be used, please use the 'options' prop"
      );
    }
    const inputRef = useRef<HTMLInputElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    const [
      selectedOptions,
      {
        set,
        push,
        updateAt,
        insertAt,
        update,
        updateFirst,
        upsert,
        sort,
        filter,
        removeAt,
        clear,
        reset,
      },
    ] = useList<{ id: string; label: string }>(
      defaultValue && options
        ? [
            {
              id: defaultValue,
              label:
                options.find((option) => option.id === defaultValue)?.label ||
                "",
            },
          ]
        : []
    );

    const [query, setQuery] = useState("");

    const filteredOptions =
      query === ""
        ? options
        : // .filter((option) => {
          //     const match = !selectedOptions
          //       .map((item) => item.id)
          //       .includes(option.id);

          //     return match;
          //   })
          options?.filter(
            (option) =>
              contains(option.id.toLowerCase(), query) ||
              contains(option.label.toLowerCase(), query)
          );

    // Reset the combobox value whenever an item is checked or unchecked.
    // useEffect(() => {
    //   combobox.setValue("");
    // }, [select.value, combobox.setValue]);

    return (
      <ComboBoxRoot
        defaultValue={defaultValue}
        open={isOpen}
        value={selectedOptions[0]?.label}
        onValueChange={(selectedValue) => {
          const match = options?.find((option) => option.id === selectedValue);

          if (match) {
            if (multi) {
              setQuery("");
            } else {
              setQuery(match.label);
            }
            push({ id: match.id, label: match.label });
            setIsOpen((prevState) => !prevState);

            // onValueChange(match)
          }
        }}
        {...props}
      >
        <StyledComboBoxContainer>
          <ComboBoxInput
            value={query}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setQuery(e.currentTarget.value);
              setIsOpen(true);
            }}
            // onChange={(value) => {
            //   setQuery(String(value));
            //   setIsOpen(true);
            // }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(true)}
            // {...inputProps}
            ref={inputRef}
            endEnhancer={endEnhancer}
            startEnhancer={startEnhancer}
            loadingEnhancer={loadingEnhancer}
            isLoading={isLoading}
            clearable={!!query}
            onClearClick={() => {
              setQuery("");
              clear();
            }}
            // debounce
            // debounceTimeout={2000}
            Before={() => {
              return multi && selectedOptions.length ? (
                <ComboBoxSelectedItemsRoot>
                  {selectedOptions?.length > 0 &&
                  selectedOptions?.length <= 3 ? (
                    selectedOptions.map((item) => {
                      return (
                        <Tag
                          key={item.id}
                          onClick={() => {
                            const matchIndex = selectedOptions?.findIndex(
                              (option) => option.id === item.id
                            );
                            setQuery("");
                            removeAt(matchIndex);
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
            disabled={disabled}
            role="combobox"
            aria-controls={id}
          />
          <ComboBoxTrigger
            ref={forwardedRef}
            aria-label={ariaLabel}
            data-positive={positive ? "" : undefined}
            data-error={error ? "" : undefined}
            appearance={appearance}
            onClick={() => setIsOpen((prevState) => !prevState)}
            data-searchable={searchable}
            disabled={disabled}
            data-trigger={multi ? "multiselect" : "single"}
          >
            {/* <ComboBoxValue multi={multi} searchable={searchable}/> */}
            {triggerIcon === "visible" ? (
              <ComboBoxIcon appearance={appearance} multi={multi}>
                <ChevronDownIcon />
              </ComboBoxIcon>
            ) : null}
          </ComboBoxTrigger>

          <ComboBoxContent
            onPointerDownOutside={() => setIsOpen((prevState) => !prevState)}
            onEscapeKeyDown={() => setIsOpen((prevState) => !prevState)}
            onCloseAutoFocus={(event) => event.preventDefault()}
            id={id}
          >
            <ComboBoxScrollUpButton>
              <ChevronUpIcon />
            </ComboBoxScrollUpButton>
            <ComboBoxViewport>
              {filteredOptions?.length === 0 && query !== "" ? (
                <div>Nothing found.</div>
              ) : (
                filteredOptions?.map((item) => {
                  return (
                    <ComboBoxItem
                      value={item.id}
                      key={item.id}
                      icon={item.icon}
                    >
                      {item.label}
                    </ComboBoxItem>
                  );
                })
              )}
            </ComboBoxViewport>
            <ComboBoxScrollDownButton>
              <ChevronDownIcon />
            </ComboBoxScrollDownButton>
          </ComboBoxContent>
        </StyledComboBoxContainer>
      </ComboBoxRoot>
    );
  }
);

ComboBox.displayName = "ComboBox";

export default ComboBox;
