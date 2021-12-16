import Main from "@layout/Main";

import React from "react";
import CurrencyFormat from "react-currency-format";

import SingleTable from "@components/Booking/SingleTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { ISingleUser } from "types/customers";
import withAuth from "utils/lib/withAuth";
import Image from "next/image";

const SingleUser = (user: { user: ISingleUser }) => {
  const {
    createdAt,
    email,
    firstName,
    lastName,
    isBlocked,
    newUser,
    phoneNumber,
    title,
    totalBooking,
    totalSpending,
    userSpecialInformation,
    notification,
    avatar,
  } = user?.user;
  const contactDetails = [
    { title: "First Name", value: firstName, icon: "user" },
    { title: "Last Name", value: lastName, icon: "user" },
    { title: "E-mail", value: email, icon: "at" },
    { title: "Phone Number", value: phoneNumber, icon: "mobile-alt" },
    {
      title: "Title -- Gender",
      value: title,
      icon: title === "Mrs" ? "female" : "male",
    },
  ];
  const extraDetails = [
    {
      title: "Is Blocked",
      value: isBlocked ? (
        <FontAwesomeIcon icon="check" className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon="times" className="text-red-500" />
      ),
      icon: "lock",
      color: isBlocked ? "text-green-500" : "text-red-500",
    },
    {
      title: "New User",
      value: newUser ? (
        <FontAwesomeIcon icon="check" className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon="times" className="text-red-500" />
      ),
      icon: "user-plus",
      color: newUser ? "text-green-500" : "text-red-500",
    },
    {
      title: "Notification",
      value: notification ? (
        <FontAwesomeIcon icon="check" className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon="times" className="text-red-500" />
      ),
      icon: "bell",
      color: notification ? "text-green-500" : "text-red-500",
    },
    {
      title: "Total Booking",
      value: (
        <CurrencyFormat
          value={totalBooking}
          displayType={"text"}
          thousandSeparator={true}
          prefix={""}
        />
      ),
      icon: "book",
    },
    {
      title: "Total Spending",
      value: (
        <CurrencyFormat
          value={totalSpending.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      ),
      icon: "dollar-sign",
    },
  ];
  const specialInformationDetails = [
    { title: "Login", value: userSpecialInformation?.Login, icon: "door-open" },
    {
      title: "Logout",
      value: userSpecialInformation?.Logout,
      icon: "door-close",
    },
    {
      title: "Public V4",
      value: userSpecialInformation?.publicV4,
      icon: "map-pin",
    },
    {
      title: "Type",
      value: userSpecialInformation?.type,
      icon: "exchange-alt",
    },
    {
      title: "Role",
      value: userSpecialInformation?.user?.role,
      icon: "user-tag",
    },
  ];
  const router = useRouter();

  return (
    <Main>
      <Link href={router.pathname.replace("/[id]", "")}>
        <a className="flex items-center my-4 text-gray-400 text-xl">
          <FontAwesomeIcon icon="arrow-left" />
        </a>
      </Link>
      <div className="border rounded-lg bg-white p-4">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <span className="text-gray-500">
              {moment(createdAt).startOf("minutes").fromNow()} Joined
            </span>
          </div>
          <div className="rounded-full w-10 h-10 ">
            <Image
              src={avatar}
              width={40}
              height={40}
              layout="fixed"
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <SingleTable title={"Contact Details"} data={contactDetails} />
        <SingleTable title={"Extra Details"} data={extraDetails} />
        <SingleTable
          title={"Special Information Details"}
          data={specialInformationDetails}
        />
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

  return { props: { user: user?.user } };
};
export default withAuth(SingleUser);
