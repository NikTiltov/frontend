import { writable } from "svelte/store";
import { EditPortfolio } from "./types";

export const portfolio = writable(new EditPortfolio());
