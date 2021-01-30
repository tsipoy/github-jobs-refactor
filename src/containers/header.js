import React, { useState, useContext } from "react";

import { Context } from "../context/globalContext";

import { Header } from "../components";

export default function HeaderContainer() {
  const { state } = useContext(Context);
  const { allJobs } = state;
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState([]);

  return (
    <>
      <Header>
        <Header.Title>Github Jobs</Header.Title>
        <Header>
          <Header.Form>
            <Header.Input
              type="text"
              placeholder="Title, companies, expertise or benefits"
            />
            <Header.Button>Search</Header.Button>
          </Header.Form>
        </Header>
      </Header>
    </>
  );
}
