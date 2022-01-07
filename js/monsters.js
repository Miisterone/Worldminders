var url = `http://localhost:8081/data` //lien api
var searchbar_position = document.getElementById("searchbar").offsetTop - 100

let exampleDropdown = new Axentix.Dropdown('#sort-dropdown', {
    animationType: 'fade',
    animationDuration: 200
});

window.onresize = function(event) {
    let container_above = document.getElementById("top-container")
    searchbar_position = container_above.offsetTop + container_above.offsetHeight - 40;
    SearchbarPlacement()

}

window.onscroll = function(event) {
    SearchbarPlacement()
}


document.getElementById("sort-Element").addEventListener('click', () => {
    document.getElementById('sort-btn').textContent = 'Élément'
})

document.getElementById("sort-Region").addEventListener('click', () => {
    document.getElementById('sort-btn').textContent = 'Région'
})

function printcontent() {
    let types = document.getElementById('sort-btn').textContent
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data)
            if (types = "Élément") {
                document.getElementById("main-content").innerHTML = ``
            }
            if (types = "Région") {
                document.getElementById("main-content").innerHTML = ``
            }
        })
    );
}

function SearchbarPlacement() {
    let searchbar = document.getElementById("searchbar")
    console.log(searchbar_position, window.scrollY)
    if (searchbar_position <= window.scrollY) {
        searchbar.style.position = 'fixed'
        searchbar.style.top = '100px'
        document.getElementById('description').style.marginTop = '50px'
    } else {
        searchbar.style.position = 'relative'
        searchbar.style.top = 'auto'
        document.getElementById('description').style.marginTop = '0px'
    }
}