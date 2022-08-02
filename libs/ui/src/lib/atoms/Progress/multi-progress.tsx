import { option as O } from "fp-ts";
import { pipe } from "fp-ts/lib/function";
import { gt, head, isNil, last, lt, not } from "ramda";
import { FC } from "react";
import { match } from "ts-pattern";

import { useTheme } from "../../../lib/themes/use-theme";
import { Progress, ProgressProps } from "./progress";
import { StyledProgressRoot } from "./styled-components";

const ON_BOTTOM = 1; //AC: Must be 1, 0 will be treated as falsy value and logic would break.
const IN_THE_MIDDLE = 2;
const ON_TOP = 3;

export type MultiProgressProps = Omit<ProgressProps, "color"> & {
  /**Can be bigger or smaller than value. */
  originalValue?: number;
  /**Only takes 2 colors. */
  colors?: [string] | [string, string];
};

const notNull = (value: number | null) => not(isNil(value));
const getSafeValue = (value: number | null) =>
  pipe(
    value,
    O.fromNullable,
    O.chain(O.fromPredicate(notNull)),
    O.getOrElse(() => 0)
  );

const displayOnTopWhen = (condition: boolean) =>
  match(condition)
    .with(true, () => ON_TOP)
    .with(false, () => IN_THE_MIDDLE)
    .exhaustive();

export const MultiProgress: FC<MultiProgressProps> = ({
  value = 0,
  originalValue = 0,
  max = 100,
  colors,
  orientation = "horizontal",
  ...props
}) => {
  const [{ themeVars }] = useTheme();

  const safeValue = getSafeValue(value);

  return (
    <StyledProgressRoot {...props}>
      <Progress
        value={max}
        max={max}
        zIndex={ON_BOTTOM}
        animate={false}
        orientation={orientation}
      />
      <Progress
        value={originalValue}
        max={max}
        color={colors ? head(colors) : themeVars.colors.contentSecondary}
        zIndex={displayOnTopWhen(lt(originalValue, safeValue))}
        orientation={orientation}
      />
      <Progress
        value={value}
        max={max}
        color={colors ? last(colors) : undefined}
        zIndex={displayOnTopWhen(gt(originalValue, safeValue))}
        orientation={orientation}
      />
    </StyledProgressRoot>
  );
};

export default MultiProgress;
