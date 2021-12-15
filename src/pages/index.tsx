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
      <article className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Card
          icon={"calendar-check"}
          title={"Upcoming"}
          count={12}
          bg={"bg-green-100"}
          text={"text-green-400"}
        />
        <Card
          icon={"calendar-minus"}
          title={"Past"}
          count={12}
          bg={"bg-stone-100"}
          text={"text-stone-400"}
        />
        <Card
          icon={"calendar-times"}
          title={"Cancelled"}
          count={12}
          bg={"bg-red-100"}
          text={"text-red-400"}
        />
        <Card
          icon={"users"}
          title={"Total Users"}
          count={12}
          bg={"bg-blue-100"}
          text={"text-blue-400"}
        />
        <Card
          icon={"dollar-sign"}
          title={"Monthly Turnover"}
          count={12}
          bg={"bg-fuchsia-100"}
          text={"text-fuchsia-400"}
        />
      </article>
      <article className="mt-8 grid lg:grid-cols-2 gap-4 ">
        <div>
          <div className="bg-white rounded-xl border lg:py-2 lg:px-4">
            <Chart />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 flex-1">
          <NewCard title={"New Customers"} count={12} icon={"user-plus"} />
          <NewCard title={"Leader Board"} count={12} icon={"trophy"} />
        </div>
      </article>
      <article className="border bg-white mt-6 flex-1 rounded-xl py-2 px-4">
        <Chart />
      </article>
    </Main>
  );
};

export default Home;
