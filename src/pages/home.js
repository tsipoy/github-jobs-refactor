import React from 'react'

import HeaderContainer from '../containers/header';
import ListOfJobsContainer from '../containers/listOfJobs';
import SearchJobsContainer from "../containers/searchJobs";

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <SearchJobsContainer />
            <ListOfJobsContainer />
        </>

    )
}
