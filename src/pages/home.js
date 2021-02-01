import React from "react";
import { Feature } from "../components";

import HeaderContainer from "../containers/header";
import ListOfJobsContainer from "../containers/listOfJobs";
import SearchJobsContainer from "../containers/searchJobs";

export default function Home() {
  return (
    <Feature>
      <HeaderContainer />
      <Feature.Main>
        <Feature.MainDivision>
          <SearchJobsContainer />
        </Feature.MainDivision>
        <Feature.MainDivision>
          <ListOfJobsContainer />
        </Feature.MainDivision>
      </Feature.Main>
    </Feature>
  );
}
