import withAuth from "utils/lib/withAuth";
import React, { useEffect } from "react";
import Main from "@layout/Main";
import LeaderCard from "@components/LeaderBoard/LeaderCard";
import SubCard from "@components/LeaderBoard/SubCard";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { leaderBoard } from "store/actions/userAction";
import { AppState } from "store";
import { io } from "socket.io-client";
const socket = io(
  process.env.NODE_ENV === "production"
    ? "https://marinlane.herokuapp.com"
    : "http://localhost:5000",
  { transports: ["websocket"] }
);
const LeaderBoard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (router?.isReady) dispatch(leaderBoard());
  }, [router?.isReady]);
  const {
    Users: { topTen, topThree },
  } = useSelector((state: AppState) => state.user);
  useEffect(() => {
    socket.on("newThought", (id) => {
      console.log(id);
    });
    socket.on("deletedThought", (id) => {
      console.log(id);
    });
    socket.on("updateThought", (id) => {
      console.log(id);
    });
  }, []);
  const newTopThree = [topThree?.data[1], topThree?.data[0], topThree?.data[2]];
  console.log(newTopThree);

  return (
    <Main>
      <div className="text-2xl">
        <h1>Top 10 Spending</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {topThree?.data?.map((item, index) => {
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
          <h1>All Users</h1>
        </div>
        <SubCard data={topTen?.data} />
      </div>
    </Main>
  );
};

export default withAuth(LeaderBoard);
