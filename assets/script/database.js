var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", dataSearch);

function dataSearch (event) {
    event.preventDefault();
    var searchEl = document.getElementById("searchEl");
    var searchEl = searchEl.value;
    console.log(searchEl);
}
