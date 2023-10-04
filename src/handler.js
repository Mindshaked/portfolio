import './style.css'
import arrow from './assets/icons/proximo.png';

const homeIcon = document.createElement("div");
homeIcon.setAttribute("id", "home-button");

const projectBar = document.createElement("div");
projectBar.setAttribute("id", "project");

const aboutMeBar = document.createElement("div");
aboutMeBar.setAttribute("id", "about-me");

const contactBar = document.createElement("div");
contactBar.setAttribute("id", "contact");

const lateralBars = document.createElement("div");
    lateralBars.setAttribute("id", "lateral-bars");




function pageInit(){

    const container = document.createElement("div");
    container.setAttribute("id", "container");

    const blackBar = document.createElement("div");
    blackBar.setAttribute("id", "black-bar");

    const home = document.createElement("div");
    home.setAttribute("id", "home");

    const mainName = document.createElement("div");
    mainName.setAttribute("id", "main-name");
    mainName.innerHTML = "EDI GOMEZ";

    const arrowRight = document.createElement("img");
    arrowRight.setAttribute("id", "arrow");
    arrowRight.src = arrow;


  

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





    blackBar.appendChild(arrowRight);
    home.appendChild(mainName);
    home.appendChild(homeIcon);
    lateralBars.appendChild(home);
    lateralBars.appendChild(projectBar);
    projectBar.appendChild(projectName);
    aboutMeBar.appendChild(aboutMeName);
    contactBar.appendChild(contactName);
    lateralBars.appendChild(aboutMeBar);
    lateralBars.appendChild(contactBar);
    container.appendChild(lateralBars)
    home.appendChild(blackBar);
    document.body.appendChild(container);

    


}

pageInit();


//Array of different sections

class Page {
    constructor(name, tab) {
        this.name = name;
        this.status = "inactive";
        this.tab = tab;

    }
        //function to show page
        
        showPageTab(){

    
        
            this.tab.classList.add("active");
            this.status = "active";
    



            console.log(this.status);

            for (let i=0; i<sections.length; i++){
                if (sections[i] !== this){
                console.log(sections[i].status)
                sections[i].tab.classList.remove("active");
                sections[i].status = "inactive";
                }
            }

           
        };


        //function to add eventlistener to the tab when inactive


        tabChange(){
            this.tab.addEventListener("click", function(e){
                this.showPageTab();
            })

            
        
        }
        
    
}

const mainPage = new Page('mainPage', home);
const projects = new Page('projects', projectBar);
const aboutMe = new Page('About me', aboutMeBar);
const contact = new Page('Contact', contactBar);

const sections = [mainPage, projects, aboutMe, contact]

mainPage.status = "active";
mainPage.showPageTab();

for (let i=0; i<sections.length;i++){
    sections[i].tabChange;
}


homeIcon.addEventListener("click", function(e){
    mainPage.showPageTab();
})



projectBar.addEventListener("click", function(e){
    projects.showPageTab();
})

aboutMeBar.addEventListener("click", function(e){
    aboutMe.showPageTab();
})

contactBar.addEventListener("click", function(e){
    contact.showPageTab();
})



