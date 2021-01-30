import React, { useState, useContext } from "react";

import { Context } from "../context/globalContext";

import { SearchJobs } from "../components";

export default function SearchJobsContainer() {
  return (
    <>
      <SearchJobs>
        <SearchJobs.Form>
          <SearchJobs>
            <SearchJobs.Input type="checkbox" />
            <SearchJobs.Label> Full time</SearchJobs.Label>
          </SearchJobs>
          <SearchJobs>
            <SearchJobs.Title> Location</SearchJobs.Title>
            <SearchJobs.InputText
              type="text"
              placeholder="City, state, zip code or country"
            />
          </SearchJobs>
          <SearchJobs>
            <SearchJobs.Input type="radio" />
            <SearchJobs.Label> London</SearchJobs.Label>
          </SearchJobs>
          <SearchJobs>
            <SearchJobs.Input type="radio" />
            <SearchJobs.Label> Amsterdam</SearchJobs.Label>
          </SearchJobs>
          <SearchJobs>
            <SearchJobs.Input type="radio" />
            <SearchJobs.Label> New York</SearchJobs.Label>
          </SearchJobs>
          <SearchJobs>
            <SearchJobs.Input type="radio" />
            <SearchJobs.Label> Berlin</SearchJobs.Label>
          </SearchJobs>
        </SearchJobs.Form>
      </SearchJobs>
    </>
  );
}
