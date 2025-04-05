let points = localStorage.getItem("points");
points = points ? parseInt(points) : 0;

let element = document.getElementsByClassName("correct");


function wrong() {
        points = points - 100;
        console.log(points);

    localStorage.setItem("points", points);
}


function correct() {
        points = points + 100;
        console.log(points);

    localStorage.setItem("points", points);
}
