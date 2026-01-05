import "./style.css";
import homeDisplay from "./template.js";
import addProject from "./addProject.js";
import fetchQuote from "./quoteRandomizer.js";
import AllProjects from "./allProject_class.js";
import { createProjectElements } from "./project_controller.js";

const all_project = new AllProjects();

homeDisplay();
addProject();
fetchQuote();
all_project.allProject.forEach(createProjectElements);