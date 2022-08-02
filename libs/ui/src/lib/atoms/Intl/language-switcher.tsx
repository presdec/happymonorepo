import { FC } from "react";

import { StatefulSelect } from "../Select/select";

export type LanguageSwitcherProps = {
  language: string;
  setLanguage?: (value: string) => Promise<unknown>;
};

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  language,
  setLanguage,
}) => {
  return (
    <StatefulSelect
      value={[{ id: language }]}
      onChange={(e) => setLanguage && setLanguage(String(e.value[0]?.id))}
      options={[
        { label: "English", id: "en" },
        { label: "French", id: "fr" },
        { label: "German", id: "de" },
        { label: "Italian", id: "it" },
      ]}
      placeholder="Select a language"
      escapeClearsValue={false}
      clearable={false}
    />
  );
};

export default LanguageSwitcher;
