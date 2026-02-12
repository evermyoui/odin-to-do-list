import { loadElemToContainer } from "./call_loaders";

export function displayCard(){
    loadElemToContainer(".container", "div", "project-card");
    loadElemToContainer("#project-card", "div", "project");
    loadElemToContainer("#project", "p", "project-p");
}