import { Main_App } from "./app/main_app";
import { projectDependencies } from "./managers/project_manager";
import "./style.css";

projectDependencies.init();
const app = new Main_App();
app.homePage();