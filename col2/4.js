let points = localStorage.getItem("points");
points = points ? parseInt(points) : 0;


function wrong() {
        points -= 400;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col24", "true");
    
        alert("Wrong!");
        window.location.href = "../index.html";
    }

function correct() {
        points += 400;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col2_4", "true");
    
        alert("Correct!");
        window.location.href = "../index.html";
    }