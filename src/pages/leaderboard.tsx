import withAuth from "utils/lib/withAuth";
import React, { useEffect, useState } from "react";
import Main from "@layout/Main";
import LeaderCard from "@components/LeaderBoard/LeaderCard";
import SubCard from "@components/LeaderBoard/SubCard";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { leaderBoard } from "store/actions/userAction";
import { AppState } from "store";
import { io } from "socket.io-client";
import Spinner from "@components/Spinner";
import MobilCard from "@components/LeaderBoard/MobilCard";
const socket = io(
  process.env.NODE_ENV === "production"
    ? "https://marinlane.herokuapp.com"
    : "http://localhost:5000",
  { transports: ["websocket"] }
);
const LeaderBoard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (router?.isReady) dispatch(leaderBoard(router?.query));
  }, [router?.isReady, router?.query]);
  const { Users, loading, status } = useSelector(
    (state: AppState) => state.user
  );
  // useEffect(() => {
  //   socket.on("newThought", (id) => {
  //     console.log(id);
  //   });
  //   socket.on("deletedThought", (id) => {
  //     console.log(id);
  //   });
  //   socket.on("updateThought", (id) => {
  //     console.log(id);
  //   });
  // }, []);

  useEffect(() => {
    if (status === 200) setIsLoading(false);
  }, [status]);
  return (
    <Main>
      {loading ? (
        <div className="flex items-center justify-center flex-1">
          <Spinner type="TailSpin" w={80} h={80} />
        </div>
      ) : (
        <>
          <div className="text-2xl">
            <h1>Top 3 Spending</h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-4">
            {Users?.topThree?.data?.map((item, index: number) => {
              return (
                <LeaderCard
                  key={index}
                  index={index + 1}
                  createdAt={item.createdAt}
                  totalSpending={item.totalSpending}
                  title={item.title}
                  avatar={item.avatar}
                  fullName={`${item.firstName} ${item.lastName}`}
                />
              );
            })}
          </div>
          <div>
            <div className="my-6 text-2xl">
              <h1>All Users Spending</h1>
            </div>
            <SubCard
              data={Users?.topTen?.data}
              count={Users?.topTen?.count}
              pagination={Users?.topTen?.pagination}
            />
            <MobilCard data={Users?.topTen} />
          </div>
        </>
      )}
    </Main>
  );
};

export default withAuth(LeaderBoard);
