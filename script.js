// COURSE DATA + 5 ID midkiiba

let courses = {

HTML:{
ids:["H1001","H1002","H1003","H1004","H1005"],
lessons:[
{title:"HTML Intro",video:"https://cdn.discordapp.com/attachments/1476343868109881476/1476508770308722698/a3d8166c-562a-46dc-b516-8f3205a1f50e.mov?ex=69a16173&is=69a00ff3&hm=90c04154860dc5e49a2e2d6eef58ed6745efa4b41ba0f8f72df3c8b17e291d18&"},
{title:"HTML Tags",video:"videos/html2.mp4"},
{title:"HTML Forms",video:"videos/html3.mp4"}
]
},

CSS:{
ids:["C2001","C2002","C2003","C2004","C2005"],
lessons:[
{title:"CSS Intro",video:"videos/css1.mp4"},
{title:"CSS Flexbox",video:"videos/css2.mp4"},
{title:"CSS Responsive",video:"videos/css3.mp4"}
]
},

JAVASCRIPT:{
ids:["J3001","J3002","J3003","J3004","J3005"],
lessons:[
{title:"JS Basics",video:"videos/js1.mp4"},
{title:"JS Functions",video:"videos/js2.mp4"},
{title:"JS DOM",video:"videos/js3.mp4"}
]
}

};

function login(){

let id=document.getElementById("studentId").value;
let foundCourse=null;

for(let course in courses){
if(courses[course].ids.includes(id)){
foundCourse=course;
break;
}
}

if(foundCourse){

document.getElementById("loginBox").style.display="none";
document.getElementById("mainContent").classList.remove("hidden");
document.getElementById("showId").innerText=id;

loadCourse(foundCourse,id);

}else{
document.getElementById("error").innerText="ID sax ma ahan";
}

}

function loadCourse(courseName,id){

let container=document.getElementById("coursesContainer");
container.innerHTML="";

let course=courses[courseName];

let html=`<div class="course">
<h2>${courseName} COURSE</h2>`;

course.lessons.forEach(lesson=>{

html+=`
<div class="lesson">
<h3>${lesson.title}</h3>

<div style="position:relative;">
<div style="position:absolute;top:5px;left:5px;
background:rgba(0,0,0,0.6);
padding:4px 8px;border-radius:5px;font-size:12px;">
FAHAM ACADEMY | ${id}
</div>

<video controls controlsList="nodownload">
<source src="${lesson.video}" type="video/mp4">
</video>
</div>

</div>
`;
});

html+=`</div>`;

container.innerHTML=html;

}

// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable inspect
document.onkeydown=function(e){
if(e.keyCode==123) return false;
if(e.ctrlKey && e.shiftKey && e.keyCode==73) return false;
};
