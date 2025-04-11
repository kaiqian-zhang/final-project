let points = localStorage.getItem("points");
points = points ? parseInt(points) : 0;


function wrong() {
        points -= 200;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col=6_2", "true");
    
        alert("Wrong!");
        window.location.href = "../index.html";
    }

function correct() {
        points += 200;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col6_2", "true");
    
        alert("Correct!");
        window.location.href = "../index.html";
    }