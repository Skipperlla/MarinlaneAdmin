import Main from "@layout/Main";
import Card from "@components/Card";
import type { NextPage } from "next";
import {
  ActiveAppointments,
  CancelledAppointments,
  CompletedAppointments,
  MonthlyTurnover,
  Users,
} from "@lib/Icons";
import NewCustomers from "@components/NewCustomers";
import Chart from "@components/Chart";
import TableWithActions from "@components/TableWithActions";
const Home: NextPage = () => {
  const items = [
    {
      NameandSurname: "Ömer Esmer1",
      From: "San Jose International Airport",
      To: "San Diego",
      Date: "05.08.2021",
      Time: "10:15",
      ServiceClass: "Business Class",
      avatar: "/avatar.png",
      target: "/1",
    },
    {
      NameandSurname: "Ömer Esmer2",
      From: "San Jose",
      To: "San Diego",
      Date: "05.08.2021",
      Time: "10:15",
      ServiceClass: "Business Class",

      avatar: "/avatar.png",
      target: "/12",
    },
    {
      NameandSurname: "Ömer Esmer3",
      From: "San Jose",
      To: "San Diego",
      Date: "05.08.2021",
      Time: "10:15",
      ServiceClass: "Business Class",

      avatar: "/avatar.png",
      target: "/13",
    },
    {
      NameandSurname: "Ömer Esmer4",
      From: "San Jose",
      To: "San Diego",
      Date: "05.08.2021",
      Time: "10:15",
      ServiceClass: "Business Class",

      avatar: "/avatar.png",
      target: "/14",
    },
  ];
  return (
    <Main>
      <article className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <Card
          icon={<ActiveAppointments className="w-6 h-6" />}
          title={"Active Appointments"}
          count={"12"}
          bg={"bg-primary-bgOrange100 "}
        />
        <Card
          icon={<CompletedAppointments className="w-6 h-6" />}
          title={"Completed Appointments"}
          count={"12"}
          bg={"bg-green-100 "}
        />{" "}
        <Card
          icon={<CancelledAppointments className="w-6 h-6 " />}
          title={"Cancelled Appointments"}
          count={"12"}
          bg={"bg-red-100 "}
        />
        <Card
          icon={<Users className="w-6 h-6" />}
          title={"Total Users"}
          count={"12"}
          bg={"bg-blue-100 "}
        />
        <Card
          icon={<MonthlyTurnover className="w-6 h-6" />}
          title={"Monthly Turnover"}
          count={"$ 12"}
          bg={"bg-pink-100 "}
        />
      </article>
      <article className="grid xl:grid-cols-2 grid-cols-1 mt-8 gap-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <NewCustomers />
        </div>
        <div
          className="bg-white border rounded-xl  flex flex-col"
          style={{ height: "auto" }}
        >
          <div className="text-2xl  p-4">
            <span>30 Day Revenue History</span>
          </div>
          <div className="w-full  px-4 pt-4 pb-6 flex-1">
            <Chart />
          </div>
        </div>
      </article>
      <div className="bg-white border mt-4 rounded-xl ">
        <div className="text-2xl  p-4">
          <span>Active Pending Appointments</span>
        </div>
        <TableWithActions
          titles={[
            "Name and Surname",
            "From",
            "To",
            "Date",
            "Time",
            "Service Class",
            "Action",
          ]}
          contents={items}
        />
      </div>
    </Main>
  );
};

export default Home;
