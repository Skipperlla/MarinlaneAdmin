import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "@layout/Main";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";

const SingleUser = (user) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) setIsLoading(false);
  }, [router?.isReady]);

  const {
    userSpecialInformation,
    totalSpending,
    totalBooking,
    title,
    phoneNumber,
    notification,
    newUser,
    isBlocked,
    email,
    createdAt,
    Logout,
    Login,
    firstName,
    lastName,
  } = user?.user;
  if (isLoading) return "loading";
  const identity = [
    { title: "First Name", value: firstName },
    { title: "Last Name", value: lastName },
    { title: "Email", value: email },
    { title: "Phone Number", value: phoneNumber },
  ];
  const stats = [
    { title: "Notification", value: notification },
    { title: "is Blocked", value: isBlocked },
    { title: "New User", value: newUser },
    { title: "Title", value: title },
    { title: "Total Spending", value: totalSpending },
    { title: "Total Booking", value: totalBooking },
  ];
  const history = [
    { title: "First seen", value: "08.09.2021" },
    { title: "Last seen", value: "31.10.2021" },
  ];
  return (
    <Main>
      <div className="flex">
        <div className="bg-white border flex-1 w-9/12 mr-6 rounded-xl p-4 ">
          <div className="flex w-full h-full flex-col">
            <div className="flex items-center justify-between w-full h-full">
              <div className="flex-1 mr-4 w-9/12 ">
                <div className="w-full mb-4 text-2xl font-semibold">
                  <h1>Identity</h1>
                </div>
                <div className="w-full grid grid-cols-2 gap-4 ">
                  {identity.map((item, index) => {
                    return (
                      <input
                        key={index}
                        readOnly={true}
                        value={item.value}
                        className="bg-gray-100 border-b   h-full py-3 pl-2 w-full rounded-t-xl focus:outline-none"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="w-1/4  flex flex-col justify-between h-full">
                <div className=" mb-4 text-2xl font-semibold">
                  <h1>Stats</h1>
                </div>
                <div className="flex justify-between items-center flex-wrap  flex-1">
                  {stats.map((item, index) => {
                    return (
                      <div
                        className={`flex items-center w-1/2 ${
                          index % 2 != 0 && "justify-end"
                        }`}
                        key={index}
                      >
                        {typeof item.value === "boolean" && (
                          <>
                            <span className="text-sm mr-2">{item.title} :</span>
                            {item.value ? (
                              <FontAwesomeIcon
                                icon="check"
                                className="text-green-500 text-sm"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon="times"
                                className="text-red-500 text-sm"
                              />
                            )}
                          </>
                        )}
                        {typeof item.value === "string" && (
                          <>
                            <span className="text-sm mr-2">{item.title} :</span>
                            <span className="text-sm font-semibold">
                              {item.value}
                            </span>
                          </>
                        )}
                        {typeof item.value === "number" && (
                          <>
                            <span
                              className={`text-sm ${
                                item.title == "Total Spending" ? "mr-1" : "mr-2"
                              }`}
                            >
                              {item.title} :
                            </span>
                            <CurrencyFormat
                              value={item.value}
                              displayType={"text"}
                              thousandSeparator={true}
                              className={`text-sm font-semibold ${
                                item.value > 3000 && "text-red-500"
                              }`}
                              prefix={item.title == "Total Spending" ? "$" : ""}
                            />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full mb-4 text-2xl font-semibold">
                <h1>User Agent</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <div className="bg-white border p-4 rounded-xl">
            <div className=" mb-4 text-2xl font-semibold">
              <h1>History</h1>
            </div>
            <div className="flex  items-center">
              {history.map((item, index) => {
                return (
                  <div className="flex w-1/2" key={index}>
                    <div className="flex  justify-center mr-3 top-15 mt-1">
                      <FontAwesomeIcon
                        icon="clock"
                        className="text-gray-300 text-xl"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span>{item.title}</span>
                      <span className="text-sm">{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
export const getServerSideProps = async (context: {
  params: { id: string };
  req: { headers: { cookie: string } };
}) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/Admin/User/singleUser/${context.params.id}`,
    {
      headers: {
        Authorization: `Bearer: ${
          context.req.headers.cookie.split("token=")[1]
        }`,
      },
    }
  );

  const user = await response.json();
  return { props: { user: user.user } };
};
export default SingleUser;
