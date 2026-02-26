const database = {
    // Keys: ID-ga ardayga iyo koorsada loo fasaxay
    keys: { 
        "SB-111": "IT", 
        "SB-222": "GRAPHIC" 
    },
    // Courses: Casharada iyo link-yada video-ga
    courses: {
        "IT": {
            name: "Information Technology",
            lessons: [
                { title: "Lesson 1: Hordhaca IT", url: "https://cdn.discordapp.com/attachments/1476343868109881476/1476506571294113935/3cc7e5e8-dec0-47f6-aa91-e80d221950c5.mov?ex=69a15f66&is=69a00de6&hm=274547cf0634ddeb380e345bf795efddd3eed0edfa09aa77c354389187d28124&" },
                { title: "Lesson 2: Computer Hardware", url: "https://cdn.discordapp.com/attachments/1476343868109881476/1476508770308722698/a3d8166c-562a-46dc-b516-8f3205a1f50e.mov?ex=69a16173&is=69a00ff3&hm=90c04154860dc5e49a2e2d6eef58ed6745efa4b41ba0f8f72df3c8b17e291d18&" }
            ]
        }
    }
};

function validateAccess() {
    const id = document.getElementById('studentID').value.trim().toUpperCase();
    const courseType = database.keys[id];
    
    if (courseType) {
        document.getElementById('loginSection').classList.remove('active');
        document.getElementById('courseSection').style.display = 'flex';
        renderCourse(courseType);
    } else {
        alert("ID khaldan! Fadlan iska hubi.");
    }
}

function renderCourse(type) {
    const course = database.courses[type];
    document.getElementById('courseTitle').innerText = course.name;
    const list = document.getElementById('playlistItems');
    list.innerHTML = "";
    
    course.lessons.forEach((lesson, index) => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `<b>${index + 1}. ${lesson.title}</b>`;
        card.onclick = () => {
            const video = document.getElementById('videoPlayer');
            const source = document.getElementById('videoSrc');
            source.src = lesson.url;
            video.load();
            video.play();
            
            // Muuji casharka hadda socda
            document.querySelectorAll('.lesson-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        };
        list.appendChild(card);
    });
}
