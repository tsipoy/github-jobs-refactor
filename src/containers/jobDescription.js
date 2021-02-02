import React, { useContext } from "react";
import { useParams } from "react-router";
import { Description } from "../components";

import { Context } from "../context/globalContext";

export default function JobDescriptionContainer() {
    const { state } = useContext(Context);
    const { allJobs } = state;
    const { jobId } = useParams();

    console.log(jobId)

    const jobDetails = allJobs !== [] && allJobs.find(job => job.id = jobId);

    console.log(jobDetails)

  return (
    <Description>
      <Description.BigTitle>Github Jobs</Description.BigTitle>
      <Description.DescriptionContent>
        <Description.DescriptionWrapper>
          <Description.Link href="/">Back to search</Description.Link>
          <Description.SubTitle>How to apply</Description.SubTitle>
          <Description.Text>
            Please email a copy of your resume and online portfolio to
            wes@kasisto.com & CC eric@kasisto.com
          </Description.Text>
        </Description.DescriptionWrapper>
        <Description.DescriptionWrapper>
          <Description.JobNameWrapper>
            <Description.Title>{jobDetails?.title}</Description.Title>
            <Description.Type>{jobDetails?.type}</Description.Type>
            <Description.TextSmall>{jobDetails?.created_at}</Description.TextSmall>
          </Description.JobNameWrapper>
          <Description.CompanyName>{jobDetails?.company}</Description.CompanyName>
          <Description.CompanyWrapper>
            <Description.ImageContainer>
              <Description.Image src={jobDetails?.company_logo} />
            </Description.ImageContainer>
            <Description.TextSmall>{jobDetails?.location}</Description.TextSmall>
            <Description.Text>{jobDetails?.description}</Description.Text>
          </Description.CompanyWrapper>
        </Description.DescriptionWrapper>
      </Description.DescriptionContent>
    </Description>
  );
}
