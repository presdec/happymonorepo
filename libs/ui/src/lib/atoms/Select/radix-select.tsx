import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { forwardRef, ReactNode, Ref } from "react";

import { LayoutPortal } from "../../organisms/Layouts/modern";
import { useTheme } from "../../themes/use-theme";
import {
  Select as SelectPrimitive,
  SelectContentProps,
  SelectItemProps,
  SelectProps,
} from "./primitive/radix-select";
import {
  SelectStyledProps,
  StyledContent,
  StyledItem,
  StyledItemIndicator,
  StyledLabel,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSelectContentInner,
  StyledSelectContentMessage,
  StyledSelectedItemsRoot,
  StyledSelectIcon,
  StyledSelectRoot,
  StyledSelectValue,
  StyledSeparator,
  StyledTrigger,
  StyledViewport,
} from "./styled-components";

//TODO: Rename to Select once baseweb is removed
export const SelectRoot = StyledSelectRoot;
export const SelectTrigger = StyledTrigger;
export const SelectValue = StyledSelectValue;
export const SelectIcon = StyledSelectIcon;
export const SelectViewport = StyledViewport;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;
export const SelectedItemsRoot = StyledSelectedItemsRoot;
export const SelectContentMessage = StyledSelectContentMessage;

export const SelectGroup = SelectPrimitive.Group;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;

export type CustomSelectProps = SelectProps & SelectStyledProps;

export const SelectContent = ({
  children,
  ...props
}: SelectContentProps & { children?: ReactNode }) => {
  const [{ theme, themeVars, themeClass }] = useTheme();

  //   AC: Since Content is rendered outside of :root, we need to give them css vars again
  return (
    <StyledContent {...props}>
      <LayoutPortal
        theme={{
          themeValues: theme,
          themeVars: themeVars,
          themeClass: themeClass,
        }}
      >
        <StyledSelectContentInner>{children}</StyledSelectContentInner>
      </LayoutPortal>
    </StyledContent>
  );
};

export const SelectItem = forwardRef(
  (
    { children, icon, disabled, ...props }: SelectItemProps,
    forwardedRef?: Ref<HTMLDivElement>
  ) => {
    return (
      <StyledItem {...props} ref={forwardedRef} disabled={disabled}>
        <SelectItemText>{children}</SelectItemText>
        <SelectItemIndicator>
          {icon ? icon() : <CheckIcon />}
        </SelectItemIndicator>
      </StyledItem>
    );
  }
);

SelectItem.displayName = "SelectItem";

/**
 * This component is still in beta.
 *
 * Missing features:
 * - position the content in a different position, see: https://github.com/radix-ui/primitives/issues/1247
 * - multi select with tags
 * - async select
 * - virtual list
 * - search select
 * - type-ahead
 */
export const CustomSelect = forwardRef(
  (
    {
      children,
      positive,
      error,
      appearance = "default",
      ariaLabel,
      triggerIcon = "visible",
      multi,
      searchable,
      disabled,
      defaultValue,
      options,
      ...props
    }: CustomSelectProps,
    forwardedRef?: Ref<HTMLButtonElement>
  ) => {
    // const [
    //   selectedOptions,
    //   {
    //     set,
    //     push,
    //     updateAt,
    //     insertAt,
    //     update,
    //     updateFirst,
    //     upsert,
    //     sort,
    //     filter,
    //     removeAt,
    //     clear,
    //     reset,
    //   },
    // ] = useList<{ id: string; label: string }>(
    //   defaultValue && options
    //     ? [
    //         {
    //           id: defaultValue,
    //           label:
    //             options.find((option) => option.id === defaultValue)?.label ||
    //             "",
    //         },
    //       ]
    //     : []
    // );

    return (
      <SelectRoot
        defaultValue={defaultValue}
        {...props}
        // onValueChange={(selectedValue) => {
        //   const match = options?.find((option) => option.id === selectedValue);

        //   if (match) {
        //     // if (multi) {
        //     //   setQuery("");
        //     // } else {
        //     //   setQuery(match.label);
        //     // }
        //     push({ id: match.id, label: match.label });
        //     // setIsOpen((prevState) => !prevState);

        //     // onValueChange(match)
        //   }
        // }}
      >
        <SelectTrigger
          ref={forwardedRef}
          aria-label={ariaLabel}
          data-positive={positive ? "" : undefined}
          data-error={error ? "" : undefined}
          appearance={appearance}
          disabled={disabled}
        >
          <SelectValue multi={multi} />
          {/* {multi && selectedOptions.length ? (
            <SelectedItemsRoot>
              {selectedOptions?.length > 0 && selectedOptions?.length <= 3 ? (
                selectedOptions.map((item) => {
                  return (
                    <Tag
                      key={item.id}
                      onClick={() => {
                        const matchIndex = selectedOptions?.findIndex(
                          (option) => option.id === item.id
                        );

                        removeAt(matchIndex);
                      }}
                    >
     
                      {item.label}
                    </Tag>
                  );
                })
              ) : selectedOptions?.length > 3 ? (
                <SelectContentMessage>
                  Selected {selectedOptions?.length} items
                </SelectContentMessage>
              ) : null}
            </SelectedItemsRoot>
          ) : (
            <SelectValue multi={multi} />
          )} */}

          {triggerIcon === "visible" ? (
            <SelectIcon appearance={appearance} multi={multi}>
              <ChevronDownIcon />
            </SelectIcon>
          ) : null}
        </SelectTrigger>

        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            {options?.map((item) => {
              return (
                <SelectItem
                  value={item.id}
                  key={item.id}
                  icon={item.icon}
                  disabled={item.disabled}
                >
                  {item.label}
                </SelectItem>
              );
            }) || children}
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectRoot>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
