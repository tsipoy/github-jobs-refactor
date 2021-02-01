import React, { useContext } from "react";
import { Feature } from "../components";

import HeaderContainer from "../containers/header";
import ListOfJobsContainer from "../containers/listOfJobs";
import SearchJobsContainer from "../containers/searchJobs";
import { Context } from "../context/globalContext";

export default function Home() {
  const { state } = useContext(Context);
  const { isLoaded } = state;
  return (
    <Feature>
      <HeaderContainer />
      <Feature.Main>
        <Feature.MainDivision>
          <SearchJobsContainer />
        </Feature.MainDivision>
        {isLoaded ? (
            <Feature.Loading>Loading...</Feature.Loading>
          ) : (
        <Feature.MainDivision>
          <ListOfJobsContainer />
        </Feature.MainDivision>
        )}
      </Feature.Main>
    </Feature>
  );
}
