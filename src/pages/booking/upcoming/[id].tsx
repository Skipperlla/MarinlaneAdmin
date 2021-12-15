import Main from "@layout/Main";
import { colorFilter } from "@lib/listItems";

import React from "react";
import CurrencyFormat from "react-currency-format";

import SingleTable from "@components/Booking/SingleTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISingleBooking } from "types/booking";

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
      label: "Pickup",
      value: pickup,
      color: "text-green-500",
      icon: "map-marker-alt",
    },
    {
      label: "Drop Off",
      value: dropOff,
      color: "text-red-500",
      icon: "map-marker-alt",
    },
    { label: "Date", value: Date, icon: "clock" },
    { label: "Time", value: Time, icon: "hourglass" },
    {
      label: "Vehicle Class",
      value: vehicleClass,
      color: "text-black",
      icon: "car",
    },
  ];
  const optionalDetails = [
    { label: "Note", value: options, icon: "sticky-note" },
    { label: "Booking Name", value: bookingName, icon: "bookmark" },
    { label: "Stop", value: stop, icon: "coffee" },
    {
      label: "This Booking Owner",
      value: `${owner.firstName} ${owner.lastName}`,
      icon: "user-secret",
    },
  ];
  const bookingDetails = [
    {
      label: "Pickup Airport Check",
      value: pickupAirportCheck ? (
        <FontAwesomeIcon icon="check" className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon="times" className="text-red-500" />
      ),
      color: pickupAirportCheck ? "text-green-500" : "text-red-500",
      icon: "plane",
    },
    {
      label: "Drop Off Airport Check",
      value: dropOffAirportCheck ? (
        <FontAwesomeIcon icon="check" className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon="times" className="text-red-500" />
      ),
      color: dropOffAirportCheck ? "text-green-500" : "text-red-500",
      icon: "plane",
    },

    { label: "Duration", value: duration, icon: "road" },
    { label: "Mi", value: `${mi} Mi`, icon: "road" },
    {
      label: "Minute",
      value:
        matrixMinute >= 60
          ? `${Math.floor(matrixMinute / 60)} Hr`
          : `${matrixMinute} Min`,
      icon: "hourglass-half",
    },
  ];
  const PriceList = priceList.map((item: { title: string; pay: number }) => {
    return {
      label: item.title,
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
      color:
        item.title == "Total price under $100"
          ? "text-yellow-500"
          : item.title == "Tip"
          ? "text-black"
          : "",
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
    label: "Total",
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
    color: "text-black font-semibold",
  });

  return (
    <Main>
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
        <SingleTable label={"Rotation Details"} data={rotationDetails} />
        <SingleTable label={"Optional Details"} data={optionalDetails} />
        <SingleTable label={"Booking Details"} data={bookingDetails} />
        <SingleTable label={"Price Details"} data={PriceList} />
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
export default SingleUser;
