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
        if (e?.value?.length) {
          if (router.asPath.includes("?")) {
            if (Object.getOwnPropertyNames(router.query).includes(name.name)) {
              const newURL = router.asPath
                .replace(router.pathname.concat("?"), "")
                .split("&")
                [
                  Object.getOwnPropertyNames(router.query).indexOf(name.name)
                ].split("=");

              if (router.query[name.name] != e.value) {
                router.push(
                  router.asPath.replace(
                    `${newURL[0]}=${newURL[1]}`,
                    `${name.name}=${e.value}`
                  )
                );
              }
            } else {
              router.push(router.asPath.concat(`&${name.name}=${e.value}`));
            }
          } else {
            router.push(router.pathname.concat(`?${name.name}=${e.value}`));
          }
        } else {
          const newURL = router.asPath
            .replace(router.pathname.concat("?"), "")
            .split("&")
            [Object.getOwnPropertyNames(router.query).indexOf(name.name)].split(
              "="
            );
          if (router.asPath.includes("&")) {
            router.push(
              Object.getOwnPropertyNames(router.query).indexOf(name.name) == 0
                ? router.asPath.replace(`${newURL[0]}=${newURL[1]}&`, "")
                : router.asPath.replace(`&${newURL[0]}=${newURL[1]}`, "")
            );
          } else {
            router.push("/customers");
          }
        }
      }}
    />
  );
};

export default ReactSelect;
