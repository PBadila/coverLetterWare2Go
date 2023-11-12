let speechBubble = document.querySelector(".speechBubble");
let blinkBox = document.querySelector(".blinkBox");
let introContainer = document.querySelector(".introContainer");
let questionContainer = document.querySelector(".questionContainer");
let hmNameButton = document.querySelector(".hmNameButton");
let hmName = document.querySelector("#hmName");
let coverLetterPart1 = document.querySelector(".coverLetterPart1");
let manager = document.querySelector(".manager");
let skillsAlert = document.querySelector(".skillsAlert");
let moreButton = document.querySelector(".moreButton");
let coverLetterPart2 = document.querySelector(".coverLetterPart2");
let slideup = document.querySelector(".slideup");
let fading = document.querySelector(".fading");
let more2Button = document.querySelector(".more2Button");
let study = document.querySelector(".study");
let studyHover=document.querySelector(".studyHover");
let jobSkills = document.querySelector(".jobSkills");
let jobSkillsHover = document.querySelector(".jobSkillsHover");
let hoverDivStudy = document.querySelector(".hoverDivStudy");
let hoverDivSkills = document.querySelector(".hoverDivSkills");
let passion = document.querySelector(".passion");
let passionHover= document.querySelector(".passionHover");
let hoverDivPassion = document.querySelector(".hoverDivPassion");
let coverLetterPart3 = document.querySelector(".coverLetterPart3");
let explanationBox = document.querySelector(".explanationBox");
let explanationTextBox = document.querySelector(".explanationTextBox");
let draggableElements = document.querySelectorAll(".draggable");
let dropZone = document.querySelector(".dropZone");
let dropComImg = document.querySelector(".dropComImg");
let dropHere = document.querySelector(".dropHere");
let dragContainer = document.querySelector(".dragContainer");
let carouselBootstrap = document.getElementById("carouselBootstrap");
let campHeader = document.querySelector(".campHeader");
let coverLetterPart4 = document.querySelector(".coverLetterPart4");
let body = document.getElementsByTagName("BODY");
let rightArrow = document.querySelector(".rightArrow");
let leftArrow = document.querySelector(".leftArrow");
let miniTitleFeat = document.querySelector(".miniTitleFeat");
let displayProject = document.querySelector(".displayProject");
let projectTitle = document.querySelector(".projectTitle");
let projectDescription = document.querySelector(".projectDescription");
let slot2Img = document.querySelector(".slot2Img");
let slot3Img = document.querySelector(".slot3Img");
let slot2Title = document.querySelector(".slot2Title");
let slot3Title = document.querySelector(".slot3Title");
let button5 = document.querySelector(".button5");
let coverLetterPart5 = document.querySelector(".coverLetterPart5");
let why1 = document.querySelector(".why1");
let why2 = document.querySelector(".why2");

let why4 = document.querySelector(".why4");
let why5 = document.querySelector(".why5");
let button6 = document.querySelector(".button6");
let why6 = document.querySelector(".why6");
let why7 = document.querySelector(".why7");
let resumeDownload = document.querySelector(".resumeDownload");
let end = document.querySelector(".end");
let startOver = document.querySelector(".startOver");
let paint = document.querySelector(".paint");
// let linkDiv = document.querySelector(".linkDiv");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let featLiveLink = document.querySelector(".featLiveLink");
console.log(rightArrow);
console.log(draggableElements);

let managerName;
let count;
let changeName = 0;
let button6Click = 0;

const button4 = document.createElement("button");
button4.className="button4";

//Project Details (Title, Description, Image, Links)
let p1Title="Interactive Cover Letter";
let p1Description="This project is my attempt to stand out to potential employers.  While I will continue to submit cover letters, for someone who wants a break from the usual, they can click the link and learn a little about me, while also seeing my work in action.  This was also a chance for me to practice DOM manipulation and CSS animations. The biggest challenges in this project have been getting the Drag and Drop feature to behave exactly as I want it and also the responsiveness (which I am still working on)."
let p1Image="./imgs/cvScreenshot.png";
let p1link1="https://github.com/PBadila/coverLetterWare2Go";
let p1link1Inner="GitHub"
let p1Live="https://cvware2go.onrender.com";

let p2Title="Personal Blog";
let p2Description="The goal of this blog was to document my journey from the end of bootcamp to getting a job as a Software Engineer. I used this project to practice creating a database and get comfortable with React. I encountered a few obstacles, all which I actually chronicled in the blog, such as password protection and being able to edit a post. Another issue, one that I keep encountering, is getting the info from the API's to show up on the web page.  I think this may be an issue with the host that I am using, but the work around is to have the LOADING... message. If you encounter it, wait awhile, trust me - it will load eventually.";
let p2Image="./imgs/blog.png";
let p2link1="https://www.youtube.com/watch?v=NRrTH-7el38";
let p2link1Inner="Video"
let p2link2="https://github.com/PBadila/blog";
let p2link2Inner="GitHub Backend";
let p2Live = "https://journeytosoftwareengineer.onrender.com/";

let p3Title="Community Garden";
let p3Description="An app aimed at addressing food deserts by allowing users to join and interact with a community garden. As an urban agriculturist, this project was of particular interest to me. I played a key role in building the backend, creating the database and routes, and implementing API fetches. This project provided valuable experience in team dynamics, user story-driven programming, GitHub collaboration, as well as deployment through Render.com and database hosting with ElephantSQL.";
let p3Image="./imgs/garden.png";
let p3link1="https://github.com/PBadila/community-garden-front-end";
let p3link1Inner="GitHub Frontend"
let p3link2="https://github.com/PBadila/community-garden-backend";
let p3link2Inner="GitHub Backend"
let p3link3="https://community-garden-api.onrender.com/";
let p3link3Inner="API"
let p3Live = "https://community-garden.onrender.com/";


// Initial speech bubble and click here for Introduction Page
window.addEventListener('load', function () {
    setTimeout( function() {
        speechBubble.style.visibility = 'visible';
    }, 900);
    setTimeout( function() {
        blinkBox.style.visibility = 'visible';
    }, 2000);
});



//Display question for hiring manager's name
blinkBox.addEventListener('click', function () {
    //console.log("clicked");
    introContainer.style.display = "none";
    setTimeout( function() {
        questionContainer.style.display = 'flex';
    }, 1000);

})

hmName.addEventListener('change', () =>{
    changeName++;
    console.log(changeName);
})

//upon entering their name, the intro page comes in, beginning with typing out greeting
hmNameButton.addEventListener('click', function (event) {
    questionContainer.style.display="none";
    console.log("changeName: "+ changeName);
    managerName = hmName.value;
    console.log(managerName);
    
    if(changeName==0){
        managerName="Wonderful Manager";
    }
    manager.textContent = managerName;
    setTimeout( function() {
        coverLetterPart1.style.display = 'flex';
    }, 1000);
    setTimeout( function() {
        skillsAlert.style.display = 'flex';
    }, 4000);
})

//upon clicking the button, the next page mouse-over page slides in 
moreButton.addEventListener('click', function () {
    fading.classList.add('fade')
    setTimeout( function() {
        coverLetterPart1.classList.add('clicked');
    },500);
    setTimeout( function() {
        coverLetterPart2.classList.add('slideScreen4');
    }, 500);
    setTimeout( function() {
        coverLetterPart2.style.display="flex";
    },500);
})
//showing the alternate text when the mouse is over a section
hoverDivStudy.addEventListener('mouseover', function () {
    console.log("onmouseover");
    study.style.display="none";
    studyHover.style.display="block";
})

hoverDivStudy.addEventListener('mouseleave', function () {
    studyHover.style.display="none";
    study.style.display="block";
})

hoverDivSkills.addEventListener('mouseover', function () {
    console.log("onmouseover");
    jobSkills.style.display="none";
    jobSkillsHover.style.display="flex";
})

hoverDivSkills.addEventListener('mouseleave', function () {
    jobSkillsHover.style.display="none";
    jobSkills.style.display="block";
})

hoverDivPassion.addEventListener('mouseover', function () {
    console.log("onmouseover");
    passion.style.display="none";
    passionHover.style.display="flex";
})

hoverDivPassion.addEventListener('mouseleave', function () {
    passionHover.style.display="none";
    passion.style.display="block";
})

more2Button.addEventListener('click', function () {
    console.log("Clicked it!");
   
    coverLetterPart2.classList.add("clicked");
    setTimeout( function() {
        coverLetterPart3.style.display="flex";
    }, 1000);
})



//when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    let droppedNum = 0;
    console.log(droppedNum);

       // Make each draggable element draggable
       draggableElements.forEach(draggable => {
           
            draggable.addEventListener("dragstart", (e) => {
                console.log("Dragstart");
                draggable.classList.add("dragging")
                // this is the data that goes with each draggable element (the img and the explanation)
                e.dataTransfer.setData("icon", draggable.dataset.icon);
                e.dataTransfer.setData("explanation", draggable.dataset.explanation);
                e.dataTransfer.setData("head",draggable.dataset.head);
                //hide image from the drag box once it has started to drag
                // draggable.style.visibility = "hidden";
            });

            draggable.addEventListener("dragend", ()=> {
                draggable.classList.remove("dragging");
                draggable.style.visibility = "hidden";
                console.log("dragened")
            });
        });
        //setting up drop zone to receive dropped items
        dropHere.addEventListener("dragover", (e)=> {
            e.preventDefault(); 
        
        });

        dropHere.addEventListener("drop",(e) => {
            e.preventDefault();
            
        
            // Remove the existing smIcon
            const currentSmIcon = dropComImg.querySelector(".smIcon");
            if (currentSmIcon) {
                currentSmIcon.remove();
            }
            const iconSrc = e.dataTransfer.getData("icon"); // Get the image source
            const explanation = e.dataTransfer.getData("explanation"); // Get the explanation for that item
            const headerBoot = e.dataTransfer.getData("head");// Get the header for that item
            console.log(headerBoot);
            const droppedIcon = document.createElement("div");
            
            droppedIcon.className = "dropped icon";
            
            droppedIcon.dataset.icon = iconSrc;

            const img = document.createElement("img");
            img.src = iconSrc;
            img.style.width = "40px"; // Set the width of the image
            img.style.marginRight = "5px";
            img.style.marginLeft = "5px";
          
            // Append the image to the dropped icon
            droppedIcon.appendChild(img);
            dropHere.appendChild(droppedIcon);
            console.log(headerBoot)
            campHeader.innerText=headerBoot;
            //icon on laptop screen
            
            const screenImg = document.createElement("img");
            screenImg.className ="smIcon"
            screenImg.src=iconSrc;
            screenImg.style.width="20%";
            explanationBox.appendChild(screenImg);
            // dropComImg.appendChild(droppedIcon);
            explanationTextBox.innerText = explanation;
            droppedNum++;
            console.log(droppedNum);
            if(droppedNum==1){
               
                coverLetterPart3.appendChild(button4);
              

            }
           
        })
})

button4.addEventListener('click', () => {
    console.log("button4 clicked")
    coverLetterPart3.style.display = "none";
    
    // body[0].style.backgroundColor="white";
    coverLetterPart4.style.display = "flex";
    count=0;
})

rightArrow.addEventListener('click', () => {

    
    switch(count){
        case 0:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p2Title;
            displayProject.src=p2Image;
            projectTitle.innerText=p2Title;
            projectDescription.innerText=p2Description;
            featLiveLink.setAttribute("href",p2Live);
            link1.setAttribute("href",p2link1);
            link2.setAttribute("href",p2link2);
            link1.innerText=p2link1Inner;
            link2.innerText=p2link2Inner;
            link3.setAttribute("href","#");
            link3.innerText="";

            //switching the 2nd box
            slot2Title.innerText=p3Title;
            slot2Img.src=p3Image;
            //switching the 3rd box
            slot3Title.innerText=p1Title;
            slot3Img.src=p1Image;
            count++;
            break;
        case 1:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p3Title;
            displayProject.src=p3Image;
            projectTitle.innerText=p3Title;
            projectDescription.innerText=p3Description;
            featLiveLink.setAttribute("href",p3Live);
            link1.setAttribute("href",p3link1);
            link2.setAttribute("href",p3link2);
            link3.setAttribute("href",p3link3);
            link1.innerText=p3link1Inner;
            link2.innerText=p3link2Inner;
            link3.innerText=p3link3Inner;

            //switching the 2nd box
            slot2Title.innerText=p1Title;
            slot2Img.src=p1Image;
            //switching the 3rd box
            slot3Title.innerText=p2Title;
            slot3Img.src=p2Image;
            count++;
            break;
        case 2:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p1Title;
            displayProject.src=p1Image;
            projectTitle.innerText=p1Title;
            projectDescription.innerText=p1Description;
            featLiveLink.setAttribute("href",p1Live);
            link1.setAttribute("href",p1link1);
            link1.innerText=p1link1Inner;
            link2.setAttribute("href","#");
            link2.innerText="";
            link3.setAttribute("href","#");
            link3.innerText="";
            
           
            //switching the 2nd box
            slot2Title.innerText=p2Title;
            slot2Img.src=p2Image;
            //switching the 3rd box
            slot3Title.innerText=p3Title;
            slot3Img.src=p3Image;
            count=0;
        
            break;

    }
})

leftArrow.addEventListener('click', () => {
    
    switch(count){
        case 0:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p3Title;
            displayProject.src=p3Image;
            projectTitle.innerText=p3Title;
            projectDescription.innerText=p3Description;
            featLiveLink.setAttribute("href",p3Live);
            link1.setAttribute("href",p3link1);
            link2.setAttribute("href",p3link2);
            link3.setAttribute("href",p3link3);
            link1.innerText=p3link1Inner;
            link2.innerText=p3link2Inner;
            link3.innerText=p3link3Inner;
            //switching the 2nd box
            slot2Title.innerText=p1Title;
            slot2Img.src=p1Image;
            //switching the 3rd box
            slot3Title.innerText=p2Title;
            slot3Img.src=p2Image;
            count=2;
            break;
        case 1:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p1Title;
            displayProject.src=p1Image;
            projectTitle.innerText=p1Title;
            projectDescription.innerText=p1Description;
            featLiveLink.setAttribute("href",p1Live);
            link1.setAttribute("href",p1link1);
            link1.innerText=p1link1Inner;
            link2.setAttribute("href","#");
            link2.innerText="";
            link3.setAttribute("href","#");
            link3.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p2Title;
            slot2Img.src=p2Image;
            //switching the 3rd box
            slot3Title.innerText=p3Title;
            slot3Img.src=p3Image;
            count--;
            break;
        case 2:
            //switching the feature
            
            console.log("Count: "+count)
            miniTitleFeat.innerText=p2Title;
            displayProject.src=p2Image;
            projectTitle.innerText=p2Title;
            projectDescription.innerText=p2Description;
            featLiveLink.setAttribute("href",p2Live);
            link1.setAttribute("href",p2link1);
            link2.setAttribute("href",p2link2);
            link1.innerText=p2link1Inner;
            link2.innerText=p2link2Inner;
            link3.setAttribute("href","#");
            link3.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p3Title;
            slot2Img.src=p3Image;
            //switching the 3rd box
            slot3Title.innerText=p1Title;
            slot3Img.src=p1Image;
            count--;
            break;

    }
})

button5.addEventListener('click', () =>{
    coverLetterPart4.style.display="none";
    coverLetterPart5.style.display="flex";
    setTimeout( function() {
        button6.style.visibility="visible";
    }, 3000);
    button6Click = 0;
})

button6.addEventListener('click', () => {
    console.log(button6Click);
    switch (button6Click){
        case 0:
            why1.style.display="none";
            why2.style.display="none";
            
            why4.style.display="block";
            why5.style.display="block";
            button6Click++;
            break;
        case 1:
            why4.style.display="none";
            why5.style.display="none";
            why6.style.display="block";
            why7.style.display="block";
            resumeDownload.style.display="block";
            button6Click++;
            break;
        case 2:
            why6.style.display="none";
            why7.style.display="none";
            resumeDownload.style.display="none";
            end.style.display="block";
            
            paint.style.display="block";
            button6.style.display="none";
    }
  
})



