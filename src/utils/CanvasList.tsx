import { FC } from "react";
import Wave from "../shaderProjects/Wave/Wave";

interface ProjectComponents {
  [key: string]: FC;
}

export const projectComponents: ProjectComponents = {
  id1: Wave,
};
