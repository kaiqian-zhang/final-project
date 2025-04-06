let points = localStorage.getItem("points");
points = points ? parseInt(points) : 0;


function wrong() {
        points -= 100;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col=4_1", "true");
    
        alert("Wrong!");
        window.location.href = "../index.html";
    }

function correct() {
        points += 100;
        localStorage.setItem("points", points);
    
        localStorage.setItem("answered_col4_1", "true");
    
        alert("Correct!");
        window.location.href = "../index.html";
    }