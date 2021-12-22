import { useRouter } from "next/router";
import React from "react";
import Select from "react-select";
interface IOptions {
  label: string;
  value: string;
}
interface IReactSelect {
  options: IOptions[];
  placeHolder: string;
  name: string;
  value: string | string[] | undefined;
}
const ReactSelect: React.FC<IReactSelect> = ({
  options,
  placeHolder,
  name,
  value,
}) => {
  const router = useRouter();

  return (
    <Select
      options={options}
      placeholder={placeHolder}
      name={name}
      isClearable={true}
      isSearchable={false}
      value={options.filter((option) => option.value === value)}
      onChange={(e: any, name: any) => {
        if (name.action === "clear") {
          const querys = { ...router.query };
          delete querys[name.name];
          router.push({
            pathname: router.pathname,
            query: querys,
          });
        } else {
          router.push({
            pathname: router.pathname,
            query: { ...router.query, [name.name]: e.value },
          });
        }
      }}
    />
  );
};

export default ReactSelect;
