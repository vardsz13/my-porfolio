import { ReactElement } from "react";

export interface TechItem {
  name: string;
  icon: ReactElement;
}

export interface TechStackData {
  [category: string]: TechItem[];
}