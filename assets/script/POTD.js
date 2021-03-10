

var apiKey = "XvLTpui2hXNheDsSnEtREjEAXML7SgZKpYJbGjHP";
var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey 


// request.open("GET", url + apiKey);
// request.send();


window.addEventListener("load", function(){
    fetch(url).then(function (response) {
       return response.json()}).then(function (data) {
            console.log(data)
        document.getElementById("container").textContent = data.title;
        document.getElementById("date").textContent = data.date;
        document.getElementById("picture").setAttribute("src", data.url);
        if (data.media_type !=="video"){
            document.getElementById("picture").setAttribute("src", data.url);

        }else {
            document.getElementById("picture").setAttribute("src", "./assets/images/milkyway.jpg");

        }
        document.getElementById("author").textContent = data.explanation;

    })
})