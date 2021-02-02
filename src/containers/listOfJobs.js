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
        <ListOfJobs.Link href="/description/:jobId" key={job.id}>
          <ListOfJobs>
            <ListOfJobs.ImageContainer>
              <ListOfJobs.Image src={job.company_logo} />
            </ListOfJobs.ImageContainer>
            <ListOfJobs.AllJobsWrapper>
              <ListOfJobs.CompanyAbout>
                <ListOfJobs.CompanyName>{job.company}</ListOfJobs.CompanyName>
                <ListOfJobs.Title>{job.title}</ListOfJobs.Title>
                <ListOfJobs.Type>{job.type}</ListOfJobs.Type>
              </ListOfJobs.CompanyAbout>
              <ListOfJobs.TextWrapper>
                <ListOfJobs.Text>{job.location}</ListOfJobs.Text>
                <ListOfJobs.Text>{job.created_at}</ListOfJobs.Text>
              </ListOfJobs.TextWrapper>
            </ListOfJobs.AllJobsWrapper>
          </ListOfJobs>
        </ListOfJobs.Link>
      ))}
    </>
  );
}
