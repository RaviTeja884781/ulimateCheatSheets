import React from "react";
import Home from "../components/Home";
import css from "../data/Programming/css";
import html from "../data/Programming/html";
import javascript from "../data/Programming/javascript";
import vsCode from "../data/toolKit/vsCode";
import git from "../data/Programming/git";
import es6 from "../data/Programming/es6";
import emmet from "../data/Programming/emmet";
import githubCli from "../data/toolKit/githubCli";
import githubAction from "../data/toolKit/githubAction";
import docker from "../data/Programming/docker";
import markdown from "../data/Programming/markdown";

const Viewer = React.lazy(() => import("../components/Viewer"));

const dataMap = {
  "/html": html,
  "/css": css,
  "/javascript": javascript,
  "/vsCode": vsCode,
  "/git": git,
  "/es6": es6,
  "/emmet": emmet,
  "/githubCli": githubCli,
  "/githubActions": githubAction,
  "/docker": docker,
  "/markdown": markdown,
};

const components = [
  {
    path: "/",
    component: <Home />,
  },
  ...Object.keys(dataMap).map((path) => ({
    path,
    component: <Viewer data={dataMap[path]} />,
  })),
];

export default components;
