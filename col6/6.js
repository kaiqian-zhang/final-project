let points = localStorage.getItem("points");
points = points ? parseInt(points) : 0;


function wrong() {
        points -= 600;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col6_6", "true");
    
        alert("Wrong!");
        window.location.href = "../index.html";
    }

function correct() {
        points += 600;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col6_6", "true");
    
        alert("Correct!");
        window.location.href = "../index.html";
    }