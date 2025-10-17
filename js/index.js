function constructTourOptions() {
    const tourOptions = document.getElementById("tour-options");

    LANDING_DATA.forEach((trackData) => {
        const trackCard = document.createElement("div");
        trackCard.innerHTML = `<div class="tour-card">
            <img src="${trackData.preview.image}" alt="${trackData.title}" style="object-position: 0 ${trackData.preview.offset}%;">
            <div class="info">
                <h3>${trackData.title}</h3>
                <p>${trackData.description}</p>
                <a href="tour.html?track=${trackData.name}" class="start-btn">Start Tour</a>
            </div>
        </div>`;

        tourOptions.appendChild(trackCard);
    });
}

function openModal() {
    document.getElementById("tourModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("tourModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("tourModal");
    if (event.target === modal) closeModal();
};

constructTourOptions();
