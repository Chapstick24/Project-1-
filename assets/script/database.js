// var searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("click", dataSearch);

// function dataSearch (event) {
//     event.preventDefault();
//     var searchEl = document.getElementById("searchEl");
//     var searchEl = searchEl.value;
//     console.log(searchEl);
// }

var url0 = "https://images-api.nasa.gov/";
var url1 = "/search?q="


var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", dataSearch);

function dataSearch (event) {
    event.preventDefault();
    var searchEl = document.getElementById("searchEl");
    var searchEl = searchEl.value;
    console.log(searchEl);

    var searchUrl = url0 + url1 + searchEl;
    fetch(searchUrl)
    .then(function(response) {
        return response.json();
        
    })
    .then(function(data) {
        document.getElementById("container").textContent = data.collection.items[0].data[0].description;
        document.getElementById("container1").textContent = data.collection.items[1].data[0].description;
        document.getElementById("picture").setAttribute("src", data.collection.items[0].links[0].href);
        document.getElementById("picture1").setAttribute("src", data.collection.items[1].links[0].href);
        console.log(data.collection.items[0]);
        console.log(data.collection.items[1]);
        console.log(data.collection.items[2]);


    })
}