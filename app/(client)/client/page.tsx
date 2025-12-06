import ActiveJobs from "@/components/layout/client/ActiveJobs";
import Metrics from "@/components/layout/client/Metrics";
import RecentMatches from "@/components/layout/client/RecentMatches";
import TodoPanel from "@/components/layout/client/TodoPanel";
import React from "react";

const client = () => {
  return (
    <div className="">
      <Metrics />
      <TodoPanel />
      <ActiveJobs />
      <RecentMatches />
    </div>
  );
};

export default client;
