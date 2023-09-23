import './style.css'
import arrow from './assets/icons/proximo.png';





const container = document.createElement("div");
container.setAttribute("id", "container");

const blackBar = document.createElement("div");
blackBar.setAttribute("id", "black-bar");

const lateralBars = document.createElement("div");
lateralBars.setAttribute("id", "lateral-bars");

const mainName = document.createElement("div");
mainName.setAttribute("id", "main-name");
mainName.innerHTML = "EDI GOMEZ";

const arrowRight = document.createElement("img");
arrowRight.setAttribute("id", "arrow");
arrowRight.src = arrow;


const projectBar = document.createElement("div");
projectBar.setAttribute("id", "project");

const projectName = document.createElement("div");
const aboutMeName = document.createElement("div");
const contactName = document.createElement("div");
projectName.className = "lateral-menu-names";
aboutMeName.className = "lateral-menu-names";
aboutMeName.setAttribute("id", "about-me-name")
contactName.className = "lateral-menu-names";

projectName.innerHTML = "Projects";
aboutMeName.innerHTML = "About Me";
contactName.innerHTML = "Contact";


const aboutMeBar = document.createElement("div");
aboutMeBar.setAttribute("id", "about-me");

const contactBar = document.createElement("div");
contactBar.setAttribute("id", "contact");



blackBar.appendChild(arrowRight);
container.appendChild(mainName);
lateralBars.appendChild(projectBar);
projectBar.appendChild(projectName);
aboutMeBar.appendChild(aboutMeName);
contactBar.appendChild(contactName);
lateralBars.appendChild(aboutMeBar);
lateralBars.appendChild(contactBar);
container.appendChild(lateralBars)
container.appendChild(blackBar);
document.body.appendChild(container);


