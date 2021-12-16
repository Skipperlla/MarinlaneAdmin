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
}
const ReactSelect: React.FC<IReactSelect> = ({
  options,
  placeHolder,
  name,
}) => {
  const router = useRouter();

  return (
    <Select
      options={options}
      placeholder={placeHolder}
      name={name}
      isClearable={true}
      isSearchable={false}
      onChange={(e: any, name: any) => {
        if (router.query[name.name] == e.value) {
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
