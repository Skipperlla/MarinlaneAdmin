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

import { Chart } from "@components/Chart";
import NewCard from "@components/Home/NewCard";

const Home: NextPage = () => {
  return (
    <Main>
      <article className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <Card
          icon={"calendar-check"}
          title={"Upcoming"}
          count={"12"}
          bg={"bg-primary-bgOrange100 "}
        />
        <Card
          icon={"calendar-minus"}
          title={"Past"}
          count={"12"}
          bg={"bg-green-100 "}
        />
        <Card
          icon={"calendar-times"}
          title={"Cancelled"}
          count={"12"}
          bg={"bg-red-100 "}
        />
        <Card
          icon={"users"}
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
      <article className="mt-8  flex justify-between w-full h-full">
        <div className="w-full">
          <div className="bg-white rounded-xl border  py-2 px-4">
            <Chart />
          </div>
        </div>
        <div className="w-full flex ml-4 h-full">
          <NewCard title={"New Customers"} count={12} icon={"user-plus"} />
          <NewCard title={"Leader Board"} count={12} icon={"trophy"} />
        </div>
      </article>
    </Main>
  );
};

export default Home;
