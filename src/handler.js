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

const aboutMeBar = document.createElement("div");
aboutMeBar.setAttribute("id", "about-me");

const contactBar = document.createElement("div");
contactBar.setAttribute("id", "contact");



blackBar.appendChild(arrowRight);
container.appendChild(mainName);
lateralBars.appendChild(projectBar);
lateralBars.appendChild(aboutMeBar);
lateralBars.appendChild(contactBar);
container.appendChild(lateralBars)
container.appendChild(blackBar);
document.body.appendChild(container);


