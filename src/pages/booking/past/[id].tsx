import Main from "@layout/Main";
import { colorFilter } from "utils/lib/listItems";

import React from "react";
import CurrencyFormat from "react-currency-format";

import SingleTable from "@components/Booking/SingleTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISingleBooking } from "types/booking";
import Link from "next/link";
import { useRouter } from "next/router";
import withAuth from "utils/lib/withAuth";
const SingleUser = (booking: { booking: ISingleBooking }) => {
  const {
    rides,
    status,
    owner,
    Date,
    pickup,
    dropOff,
    vehicleClass,
    duration,
    Time,
    options,
    bookingName,
    stop,
    pickupAirportCheck,
    dropOffAirportCheck,
    totalPrice,
    mi,
    matrixMinute,
    priceList,
  } = booking?.booking;
  const rotationDetails = [
    {
      title: "Pickup",
      value: pickup,
      color: "text-green-500",
      icon: "map-marker-alt",
    },
    {
      title: "Drop Off",
      value: dropOff,
      color: "text-red-500",
      icon: "map-marker-alt",
    },
    { title: "Date", value: Date, icon: "clock" },
    { title: "Time", value: Time, icon: "hourglass" },
    {
      title: "Vehicle Class",
      value: vehicleClass,
      color: "text-black",
      icon: "car",
    },
  ];
  const optionalDetails = [
    { title: "Note", value: options, icon: "sticky-note" },
    { title: "Booking Name", value: bookingName, icon: "bookmark" },
    { title: "Stop", value: stop, icon: "coffee" },
    {
      title: "This Booking Owner",
      value: `${owner.firstName} ${owner.lastName}`,
      icon: "user-secret",
    },
  ];
  const bookingDetails = [
    {
      title: "Pickup Airport Check",
      value: pickupAirportCheck ? (
        <FontAwesomeIcon icon="check" className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon="times" className="text-red-500" />
      ),
      color: pickupAirportCheck ? "text-green-500" : "text-red-500",
      icon: "plane",
    },
    {
      title: "Drop Off Airport Check",
      value: dropOffAirportCheck ? (
        <FontAwesomeIcon icon="check" className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon="times" className="text-red-500" />
      ),
      color: dropOffAirportCheck ? "text-green-500" : "text-red-500",
      icon: "plane",
    },

    { title: "Duration", value: duration, icon: "road" },
    { title: "Mi", value: `${mi} Mi`, icon: "road" },
    {
      title: "Minute",
      value:
        matrixMinute >= 60
          ? `${Math.floor(matrixMinute / 60)} Hr`
          : `${matrixMinute} Min`,
      icon: "hourglass-half",
    },
  ];
  const PriceList = priceList.map((item: { title: string; pay: number }) => {
    return {
      title: item.title,
      icon:
        item.title == "Base fare"
          ? "ticket-alt"
          : item.title == "Minute"
          ? "hourglass-half"
          : item.title == "Mil"
          ? "road"
          : item.title == "Tip"
          ? "smile-beam"
          : item.title == "Tools"
          ? "receipt"
          : "cart-arrow-down",

      value: (
        <CurrencyFormat
          value={item.pay}
          className={`${item.pay > 0 && "text-red-500 font-semibold"}`}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      ),
    };
  });

  PriceList.push({
    title: "Total",
    icon: "cash-register",
    value: (
      <CurrencyFormat
        value={totalPrice}
        className={`${totalPrice >= 1000 && "text-red-500 font-semibold"}`}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    ),
  });
  const router = useRouter();

  return (
    <Main>
      <Link href={router.pathname.replace("/[id]", "")}>
        <a className="flex items-center my-4 text-gray-400 text-xl">
          <FontAwesomeIcon icon="arrow-left" />
        </a>
      </Link>
      <div className="border rounded-lg bg-white p-4">
        <div className="flex justify-between ">
          <div>
            <h1 className="inline-block text-xl">Status:</h1>
            &nbsp;&nbsp;
            <span className={`text-base ${colorFilter(status)[0].color}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
          <h1
            className={`text-xl ${
              rides == "Upcoming"
                ? "text-green-500"
                : rides == "Past"
                ? "text-black"
                : "text-red-500"
            }`}
          >
            {rides}
          </h1>
        </div>
        <SingleTable title={"Rotation Details"} data={rotationDetails} />
        <SingleTable title={"Optional Details"} data={optionalDetails} />
        <SingleTable title={"Booking Details"} data={bookingDetails} />
        <SingleTable title={"Price Details"} data={PriceList} />
      </div>
    </Main>
  );
};
export const getServerSideProps = async (context: {
  params: { id: string };
  req: { headers: { cookie: string } };
}) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/Admin/Booking/singleBooking/${context.params.id}`,
    {
      headers: {
        Authorization: `Bearer: ${
          context.req.headers.cookie.split("token=")[1]
        }`,
      },
    }
  );

  const booking = await response.json();

  return { props: { booking: booking.data } };
};
export default withAuth(SingleUser);
