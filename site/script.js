// Live Clock
function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleString();
}
setInterval(updateTime, 1000);

// Click Counter
let counter = 0;
function increment() {
    counter++;
    document.getElementById("count").innerText = counter;
}

// API Simulation
function fetchData() {
    document.getElementById("api-result").innerText = "Fetching data...";
    
    setTimeout(() => {
        document.getElementById("api-result").innerText =
            "Data fetched successfully from backend API ✅";
    }, 1500);
}