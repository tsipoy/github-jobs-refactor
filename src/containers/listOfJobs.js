import React, { useContext } from "react";

import { Context } from "../context/globalContext";

import { ListOfJobs } from "../components";

export default function ListOfJobsContainer() {
  const { state } = useContext(Context);
  const { allJobs } = state;

  console.log(allJobs);

  return (
    <>
      {allJobs.map((job) => (
        <ListOfJobs key={job.id}>
          <ListOfJobs.Image src={job.company_logo} />
          <ListOfJobs.AllJobsWrapper>
            <ListOfJobs.CompanyName>{job.company}</ListOfJobs.CompanyName>
            <ListOfJobs.Title>{job.title}</ListOfJobs.Title>
            <ListOfJobs.Type>{job.type}</ListOfJobs.Type>
            <ListOfJobs.TextWrapper>
                <ListOfJobs.Text>{job.location}</ListOfJobs.Text>
                <ListOfJobs.Text>{job.created_at}</ListOfJobs.Text>
            </ListOfJobs.TextWrapper>
          </ListOfJobs.AllJobsWrapper>
        </ListOfJobs>
      ))}
    </>
  );
}
