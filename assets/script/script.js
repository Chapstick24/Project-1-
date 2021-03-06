// https://api.nasa.gov/planetary/apod?api_key=XvLTpui2hXNheDsSnEtREjEAXML7SgZKpYJbGjHP

// var apiKey = "XvLTpui2hXNheDsSnEtREjEAXML7SgZKpYJbGjHP"
// var searchForm = document.getElementById("searchForm");
// var imageEl = document.getElementById("container");
// var formEl = document.getElementById("format-input");
// var imageTitle = document.getElementById("imageTitle");
// var authorEl = document.getElementById("author");

// searchForm.addEventListener("submit", retrieveData);
//     if (!data)
//     alert("No Selection made");

// function retrieveData () {
//     prevent default
//     take user input + drop down selection and run through api
// }
// function getLocal(store) {
//     let value = localStorage.getItem(store);
//     if (value) {
//     }
// }
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", dataSearch);

function dataSearch (event) {
    event.preventDefault();
    console.log("search button");
}