import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ISegment {
  title: string;
  elements: IElements;
  icon: ReactNode;
}
interface IValues {
  label: string;
  value: string;
}
interface IElements {
  title: string;
  values: IValues[];
}
const Segment: React.FC<ISegment> = ({ title, elements, icon }) => {
  const router = useRouter();

  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <div className="w-5 mr-2 flex items-center justify-center">
          <FontAwesomeIcon
            icon={icon as IconProp}
            className=" text-lg text-gray-400"
          />
        </div>
        <h1 className="text-sm">{title}</h1>
      </div>
      <div className="flex flex-col">
        {elements.values.map((element, index: number) => {
          return (
            <div
              className={`cursor-pointer py-1 pl-8 pr-4 transition-all	flex items-center relative ${
                router.query[elements.title] == element.value
                  ? "bg-gray-300"
                  : "hover:bg-gray-100 "
              }`}
              key={index}
              onClick={() => {
                if (router.asPath.includes("?")) {
                  if (
                    Object.getOwnPropertyNames(router.query).includes(
                      elements.title
                    )
                  ) {
                    const newURL = router.asPath
                      .replace(router.pathname.concat("?"), "")
                      .split("&")
                      [
                        Object.getOwnPropertyNames(router.query).indexOf(
                          elements.title
                        )
                      ].split("=");

                    if (router.query[elements.title] == element.value) {
                      if (router.asPath.includes("&")) {
                        router.push(
                          Object.getOwnPropertyNames(router.query).indexOf(
                            elements.title
                          ) == 0
                            ? router.asPath.replace(
                                `${newURL[0]}=${newURL[1]}&`,
                                ""
                              )
                            : router.asPath.replace(
                                `&${newURL[0]}=${newURL[1]}`,
                                ""
                              )
                        );
                      } else {
                        router.push("/customers");
                      }
                    } else {
                      router.push(
                        router.asPath.replace(
                          `${newURL[0]}=${newURL[1]}`,
                          `${elements.title}=${element.value}`
                        )
                      );
                    }
                  } else {
                    router.push(
                      router.asPath.concat(
                        `&${elements.title}=${element.value}`
                      )
                    );
                  }
                } else {
                  router.push(
                    router.pathname.concat(
                      `?${elements.title}=${element.value}`
                    )
                  );
                }
              }}
            >
              <span>{element.label}</span>
              {router.query[elements.title] == element.value && (
                <FontAwesomeIcon
                  icon="times-circle"
                  className="text-primary-icon ml-2 text-lg absolute right-5"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Segment;
