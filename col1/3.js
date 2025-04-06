let points = localStorage.getItem("points");
points = points ? parseInt(points) : 0;

function wrong() {
    points -= 300;
    localStorage.setItem("points", points);

    localStorage.setItem("answered_col1_3", "true");

    alert("Wrong!");
    window.location.href = "../index.html";
}

function correct() {
    points += 300;
    localStorage.setItem("points", points);

    localStorage.setItem("answered_col1_3", "true");

    alert("Correct!");
    window.location.href = "../index.html";
}