const database = {
    // 1. ID-yada ardayda iyo koorsada loo fasaxay (Keys)
    keys: { 
        "SB-101": "IT",          // Ardayga IT-ga
        "SB-202": "GRAPHIC",     // Ardayga Graphic Design
        "SB-303": "MARKETING"    // Ardayga Marketing-ka
    },

    // 2. Xogta Koorsooyinka iyo Casharrada (Courses)
    courses: {
        "IT": {
            name: "Information Technology (IT)",
            lessons: [
                { title: "Lesson 1: Hordhaca IT", url: "https://cdn.discordapp.com/attachments/1476343868109881476/1476506571294113935/3cc7e5e8-dec0-47f6-aa91-e80d221950c5.mov?ex=69a15f66&is=69a00de6&hm=274547cf0634ddeb380e345bf795efddd3eed0edfa09aa77c354389187d28124&" },
                { title: "Lesson 2: Computer Hardware", url: "https://cdn.discordapp.com/attachments/1476343868109881476/1476508770308722698/a3d8166c-562a-46dc-b516-8f3205a1f50e.mov?ex=69a16173&is=69a00ff3&hm=90c04154860dc5e49a2e2d6eef58ed6745efa4b41ba0f8f72df3c8b17e291d18&" },
                { title: "Lesson 3: Operating Systems", url: "LINK_GA_CASHARKA_3" }
            ]
        },
        "GRAPHIC": {
            name: "Graphic Design Masterclass",
            lessons: [
                { title: "Lesson 1: Intro to Photoshop", url: "LINK_GA_GRAPHIC_1" },
                { title: "Lesson 2: Tools & Shortcuts", url: "LINK_GA_GRAPHIC_2" },
                { title: "Lesson 3: Logo Design", url: "LINK_GA_GRAPHIC_3" }
            ]
        },
        "MARKETING": {
            name: "Digital Marketing Strategy",
            lessons: [
                { title: "Lesson 1: Social Media Marketing", url: "LINK_GA_MARKETING_1" },
                { title: "Lesson 2: Facebook & Insta Ads", url: "LINK_GA_MARKETING_2" }
            ]
        }
    }
};

// Shaqada hubinta ID-ga
function validateAccess() {
    const input = document.getElementById('studentID');
    const id = input.value.trim().toUpperCase();
    const type = database.keys[id];
    
    if (type) {
        document.getElementById('loginSection').classList.remove('active');
        document.getElementById('courseSection').style.display = 'flex';
        renderCourse(type);
    } else {
        input.style.borderColor = "red";
        alert("ID-ga aad gelisay ma jiro! Fadlan hubi.");
    }
}

// Shaqada soo bandhigista casharrada
function renderCourse(type) {
    const course = database.courses[type];
    document.getElementById('courseTitle').innerText = course.name;
    const list = document.getElementById('playlistItems');
    list.innerHTML = "";
    
    course.lessons.forEach((lesson, index) => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `<span><b>${index + 1}.</b> ${lesson.title}</span>`;
        card.onclick = () => {
            const video = document.getElementById('videoPlayer');
            const source = document.getElementById('videoSrc');
            source.src = lesson.url;
            video.load();
            video.play();
            
            // Ka saar 'active' kuwa kale, ku dar kan la riixay
            document.querySelectorAll('.lesson-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        };
        list.appendChild(card);
    });
}
