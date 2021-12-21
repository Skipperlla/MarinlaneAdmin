import withAuth from "utils/lib/withAuth";
import React from "react";
import Main from "@layout/Main";
import LeaderCard from "@components/LeaderBoard/LeaderCard";
import SubCard from "@components/LeaderBoard/SubCard";

const LeaderBoard = () => {
  return (
    <Main>
      <div className="text-2xl">
        <h1>Top 10 Spending</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <LeaderCard />
        <LeaderCard />
        <LeaderCard />
      </div>
      <div>
        <div className="mt-6 text-2xl">
          <h1>All Users</h1>
        </div>
        <SubCard />
      </div>
    </Main>
  );
};

export default withAuth(LeaderBoard);
