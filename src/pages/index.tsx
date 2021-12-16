import Main from "@layout/Main";
import Card from "@components/Card";

import { Chart } from "@components/Chart";
import NewCard from "@components/Home/NewCard";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { systemInformation } from "store/actions/systemAction";
import withAuth from "utils/lib/withAuth";
import Spinner from "@components/Spinner";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { System, loading } = useSelector((state: AppState) => state.system);

  useEffect(() => {
    if (router.isReady) dispatch(systemInformation());
  }, [router?.isReady]);

  return (
    <Main>
      {loading ? (
        <div className="flex-1 flex items-center justify-center ">
          <Spinner type="TailSpin" w={80} h={80} />
        </div>
      ) : (
        <>
          <article className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <Card
              icon={"calendar-check"}
              title={"Upcoming"}
              count={System?.upcomingCount}
              bg={"bg-green-100"}
              text={"text-green-400"}
            />
            <Card
              icon={"calendar-minus"}
              title={"Past"}
              count={System?.pastCount}
              bg={"bg-stone-100"}
              text={"text-stone-400"}
            />
            <Card
              icon={"calendar-times"}
              title={"Cancelled"}
              count={System?.cancelledCount}
              bg={"bg-red-100"}
              text={"text-red-400"}
            />
            <Card
              icon={"users"}
              title={"Total Users"}
              count={System?.userCount}
              bg={"bg-blue-100"}
              text={"text-blue-400"}
            />
            <Card
              icon={"dollar-sign"}
              title={"Total Turnover"}
              count={parseInt(System?.totalTurnover?.toFixed(2))}
              bg={"bg-fuchsia-100"}
              text={"text-fuchsia-400"}
            />
          </article>
          <article className="mt-8 grid lg:grid-cols-2 gap-4 ">
            <div className="lg:block hidden">
              <div className="bg-white rounded-xl border lg:py-2 lg:px-4">
                <Chart />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 flex-1">
              <NewCard
                title={"New Customers In 24 Hour"}
                count={System?.newCustomers?.length}
                data={System?.newCustomers}
                icon={"user-plus"}
                noResult={"No registered users found within 24 hours."}
                seeMoreLink={"/customers"}
                seeMore={"See All Customers"}
              />
              <NewCard
                title={"Leader Board"}
                count={System?.leaderBoard?.length}
                data={System?.leaderBoard}
                icon={"trophy"}
                noResult={
                  "No results found on leaderboard because no one created new booking."
                }
                seeMoreLink={"/leaderboard"}
                seeMore={"See All Leader Board Customers"}
              />
            </div>
          </article>
          <article className="border bg-white mt-6 flex-1 rounded-xl py-2 px-4 lg:block hidden">
            <Chart />
          </article>
        </>
      )}
    </Main>
  );
};

export default withAuth(Home);
