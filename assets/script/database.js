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
    fetch(searchUrl);
    console.log(searchUrl);
}