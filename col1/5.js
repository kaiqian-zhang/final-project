let points = localStorage.getItem("points");
points = points ? parseInt(points) : 0;

function wrong() {
    points -= 500;
    localStorage.setItem("points", points);

    localStorage.setItem("answered_col1_5", "true");

    alert("Wrong!");
    window.location.href = "../index.html";
}

function correct() {
    points += 500;
    localStorage.setItem("points", points);

    localStorage.setItem("answered_col1_5", "true");

    alert("Correct!");
    window.location.href = "../index.html";
}