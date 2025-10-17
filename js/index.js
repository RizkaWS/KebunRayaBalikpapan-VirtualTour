// Landing Page JavaScript

const LANDING_DATA = [
    {
        "name": "embung",
        "title": "Track Embung",
        "description": "Rasakan ketenangan area Embung, di mana air yang tenang memantulkan hijaunya pepohonan di jantung Kebun Raya Balikpapan.",
        "preview": {
            "image": "tour/embung/tiles/0-step-1/preview.jpg",
            "offset": 42
        },
        "stats": {
            "scenes_ct": 50,
            "est_duration": 30
        }
    },
    {
        "name": "paping",
        "title": "Track Hutan Paping",
        "description": "Menelusuri hutan tropis yang rimbun dengan pepohonan tinggi, flora unik, dan suara alam yang menenangkan di setiap langkah.",
        "preview": {
            "image": "tiles/embung/0-step-1/preview.jpg",
            "offset": 42
        },
        "stats": {
            "scenes_ct": 30,
            "est_duration": 25
        }
    },
    {
        "name": "orchidarium",
        "title": "Track Orchidarium",
        "description": "Masuki dunia anggrek yang menakjubkan — jelajahi beragam spesies anggrek eksotis yang menjadi kebanggaan Kebun Raya.",
        "preview": {
            "image": "tiles/embung/0-step-1/preview.jpg",
            "offset": 42
        },
        "stats": {
            "scenes_ct": 20,
            "est_duration": 12
        }
    }
];

function constructTourOptions() {
    const tourOptions = document.getElementById("tour-options");

    LANDING_DATA.forEach(trackData => {
        const trackCard = document.createElement("div");
        trackCard.innerHTML =
            `<div class="tour-card">
            <img src="${trackData.preview.image}" alt="${trackData.title}" style="object-position: 0 ${trackData.preview.offset}%;">
            <div class="info">
                <h3>${trackData.title}</h3>
                <p>${trackData.description}</p>
                <a href="tour/${trackData.name}/index.html" class="start-btn">Start Tour</a>
            </div>
        </div>`;

        tourOptions.appendChild(trackCard);
    });
}

function openModal() {
    document.getElementById('tourModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('tourModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('tourModal');
    if (event.target === modal) closeModal();
}

constructTourOptions();