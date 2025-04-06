window.onload = function () {
    let points = localStorage.getItem("points");
    points = points ? parseInt(points) : 0;
    document.getElementById("score").textContent = points;

    const folders = ["col1", "col2", "col4", "col5", "col6"];

    folders.forEach(folder => {
        for (let i = 1; i <= 6; i++) {
            if (localStorage.getItem(`answered_${folder}_${i}`)) {
                const btn = document.querySelector(`a[href="${folder}/${i}.html"] > button`);
                if (btn) {
                    btn.disabled = true;
                    btn.style.backgroundColor = "gray";
                    btn.style.cursor = "not-allowed";
                    btn.style.borderColor = "gray";
                }
            }
        }
    });
};

function resetGame() {
    localStorage.clear();
    window.location.reload();
}