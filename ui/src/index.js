import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { DockerMuiThemeProvider } from "@docker/docker-mui-theme";
import { StateMachineProvider, createStore } from "little-state-machine";
import DockerClient from "./utils/docker-client";

if (module.hot) {
  module.hot.accept();
}

function log(store) {
  console.log(store);
}

createStore(
  {
    isLoading: false,
    client: DockerClient,
    github: {
      currentOrganization: null,
      currentPackage: null,
      currentPackageVersion: null,
      organizations: [],
      packages: [],
      token: localStorage.getItem("token"),
    },
  },
  {
    middleWares: [log],
  }
);

ReactDOM.render(
  <React.StrictMode>
    <DockerMuiThemeProvider>
      <CssBaseline />
      <StateMachineProvider>
        <App />
      </StateMachineProvider>
    </DockerMuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
