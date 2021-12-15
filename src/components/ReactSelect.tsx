import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Select from "react-select";

const ReactSelect = (props: ReactNode) => {
  const router = useRouter();

  return (
    <Select
      {...props}
      isClearable={true}
      isSearchable={false}
      onChange={(e, name) => {
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
