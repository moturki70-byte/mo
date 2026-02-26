const database = {
    keys: { 
        // 5 ID oo IT ah
        "FAHAM-IT-101": "IT", "FAHAM-IT-102": "IT", "FAHAM-IT-103": "IT", "FAHAM-IT-104": "IT", "FAHAM-IT-105": "IT",
        // 5 ID oo Graphic ah
        "FAHAM-GD-201": "GD", "FAHAM-GD-202": "GD", "FAHAM-GD-203": "GD", "FAHAM-GD-204": "GD", "FAHAM-GD-205": "GD",
        // 5 ID oo Marketing ah
        "FAHAM-DM-301": "DM", "FAHAM-DM-302": "DM", "FAHAM-DM-303": "DM", "FAHAM-DM-304": "DM", "FAHAM-DM-305": "DM"
    },
    courses: {
        "IT": {
            name: "IT Course",
            lessons: [{ title: "Lesson 1: Intro", url: "https://cdn.discordapp.com/attachments/1476343868109881476/1476506571294113935/3cc7e5e8-dec0-47f6-aa91-e80d221950c5.mov?ex=69a15f66&is=69a00de6&hm=274547cf0634ddeb380e345bf795efddd3eed0edfa09aa77c354389187d28124&" }]
        },
        "GD": {
            name: "Graphic Design",
            lessons: [{ title: "Lesson 1: Photoshop", url: "LINK_GA_CASHARKA" }]
        },
        "DM": {
            name: "Digital Marketing",
            lessons: [{ title: "Lesson 1: Social Media", url: "LINK_GA_CASHARKA" }]
        }
    }
};

function validateAccess() {
    const id = document.getElementById('studentID').value.trim().toUpperCase();
    const type = database.keys[id];
    if (type) {
        document.getElementById('userTag').innerText = id; // ID-ga wuxuu ku dhex soconayaa video-ga
        document.getElementById('loginSection').classList.remove('active');
        document.getElementById('courseSection').style.display = 'flex';
        renderCourse(type);
    } else { alert("ID khaldan!"); }
}

function renderCourse(type) {
    const course = database.courses[type];
    document.getElementById('courseTitle').innerText = course.name;
    const list = document.getElementById('playlistItems');
    list.innerHTML = "";
    course.lessons.forEach((l, i) => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `<b>${i+1}. ${l.title}</b>`;
        card.onclick = () => {
            document.getElementById('videoSrc').src = l.url;
            document.getElementById('videoPlayer').load();
            document.getElementById('videoPlayer').play();
            document.querySelectorAll('.lesson-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        };
        list.appendChild(card);
    });
}

// Xannibaadda Screen Recording (Madowga shaashadda ee Browser-yada qaar)
document.addEventListener('keydown', (e) => {
    if (e.key === 'PrintScreen' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert("Action not allowed!");
    }
});
