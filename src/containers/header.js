import React, { useState, useContext, useEffect } from "react";

import { Context } from "../context/globalContext";

import { Header } from "../components";

export default function HeaderContainer() {
  const { state } = useContext(Context);
  const { allJobs } = state;


  return (
    <>
      <Header>
        <Header.Title>Github Jobs</Header.Title>
        <Header>
          <Header.Form>
            <Header.Input
              type="text"
              placeholder="Title, companies, expertise or benefits"
              // value={inputValue} 
              // onChange={(e) => dispatch({ type: "SET_INPUT_VALUE",  inputValue: e.target.value })}
            />
            <Header.Button>Search</Header.Button>
          </Header.Form>
        </Header>
      </Header>
    </>
  );
}
