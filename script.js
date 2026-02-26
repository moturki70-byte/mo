const database = {
    // 1. ID-yada ardayda (15 ID oo loo qaybiyey 3 koorso)
    keys: { 
        // Koorso 1: IT
        "FAHAM-IT-101": "IT", 
        "FAHAM-IT-102": "IT",
        "FAHAM-IT-103": "IT",
        "FAHAM-IT-104": "IT",
        "FAHAM-IT-105": "IT",

        // Koorso 2: GRAPHIC DESIGN
        "FAHAM-GD-201": "GRAPHIC",
        "FAHAM-GD-202": "GRAPHIC",
        "FAHAM-GD-203": "GRAPHIC",
        "FAHAM-GD-204": "GRAPHIC",
        "FAHAM-GD-205": "GRAPHIC",

        // Koorso 3: DIGITAL MARKETING
        "FAHAM-DM-301": "MARKETING",
        "FAHAM-DM-302": "MARKETING",
        "FAHAM-DM-303": "MARKETING",
        "FAHAM-DM-304": "MARKETING",
        "FAHAM-DM-305": "MARKETING"
    },

    // 2. Xogta Casharrada ee koorso kasta
    courses: {
        "IT": {
            name: "Information Technology (IT)",
            lessons: [
                { title: "Lesson 1: Hordhaca IT", url: "https://cdn.discordapp.com/attachments/1476343868109881476/1476506571294113935/3cc7e5e8-dec0-47f6-aa91-e80d221950c5.mov?ex=69a15f66&is=69a00de6&hm=274547cf0634ddeb380e345bf795efddd3eed0edfa09aa77c354389187d28124&" },
                { title: "Lesson 2: Hardware Basics", url: "https://cdn.discordapp.com/attachments/1476343868109881476/1476508770308722698/a3d8166c-562a-46dc-b516-8f3205a1f50e.mov?ex=69a16173&is=69a00ff3&hm=90c04154860dc5e49a2e2d6eef58ed6745efa4b41ba0f8f72df3c8b17e291d18&" },
                { title: "Lesson 3: Networking", url: "GELI_LINK_CASHARKA_3" },
                { title: "Lesson 4: Cybersecurity", url: "GELI_LINK_CASHARKA_4" },
                { title: "Lesson 5: Cloud Computing", url: "GELI_LINK_CASHARKA_5" }
            ]
        },
        "GRAPHIC": {
            name: "Graphic Design Masterclass",
            lessons: [
                { title: "Lesson 1: Intro to Photoshop", url: "GELI_LINK_GRAPHIC_1" },
                { title: "Lesson 2: Color Theory", url: "GELI_LINK_GRAPHIC_2" },
                { title: "Lesson 3: Logo Design", url: "GELI_LINK_GRAPHIC_3" },
                { title: "Lesson 4: Typography", url: "GELI_LINK_GRAPHIC_4" },
                { title: "Lesson 5: Branding", url: "GELI_LINK_GRAPHIC_5" }
            ]
        },
        "MARKETING": {
            name: "Digital Marketing Strategy",
            lessons: [
                { title: "Lesson 1: Social Media Marketing", url: "GELI_LINK_MARKETING_1" },
                { title: "Lesson 2: Facebook Ads", url: "GELI_LINK_MARKETING_2" },
                { title: "Lesson 3: Google SEO", url: "GELI_LINK_MARKETING_3" },
                { title: "Lesson 4: Email Marketing", url: "GELI_LINK_MARKETING_4" },
                { title: "Lesson 5: Content Strategy", url: "GELI_LINK_MARKETING_5" }
            ]
        }
    }
};

let currentUserID = "";

function validateAccess() {
    const idInput = document.getElementById('studentID');
    const id = idInput.value.trim().toUpperCase();
    const type = database.keys[id];
    
    if (type) {
        currentUserID = id;
        document.getElementById('userTag').innerText = id;
        document.getElementById('loginSection').classList.remove('active');
        document.getElementById('courseSection').style.display = 'flex';
        renderCourse(type);
    } else {
        alert("ID khaldan! Fadlan hubi aqoonsigaaga.");
    }
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
            const video = document.getElementById('videoPlayer');
            document.getElementById('videoSrc').src = l.url;
            video.load();
            video.play();
            
            // Xayeysiiska (1 daqiiqo ka dib)
            setTimeout(() => {
                document.getElementById('adOverlay').style.display = 'flex';
                video.pause();
            }, 60000);
            
            document.querySelectorAll('.lesson-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        };
        list.appendChild(card);
    });
}

function closeAd() {
    document.getElementById('adOverlay').style.display = 'none';
    document.getElementById('videoPlayer').play();
}
