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
    printcontent()
})

document.getElementById("sort-Region").addEventListener('click', () => {
    document.getElementById('sort-btn').textContent = 'Région'
    printcontent()
})

function printcontent() {
    let sort_type = document.getElementById('sort-btn').textContent
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data)
            console.log(sort_type);
            document.getElementById("main-content").innerHTML = ``
            if (sort_type == 'Élément') {
                var array_element = ["Neutre", "Ardent", "Électrique", "Aquatique", "Végétal", "Minéral", "Céleste", "Psychique", "Chaotique", "Toxique", "Éthéré"]
                for (let i = 0; i < array_element.length; i++) {
                    document.getElementById("main-content").innerHTML +=
                        `<div class="collapsible-trigger">
                            <div id="collapsible-title">
                                ${array_element[i]}
                            </div>
                            <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                        </div>
                    `
                }
            }
            if (sort_type == "Région") {
                var array_region = ["Forêt", "Désert"]
                for (let i = 0; i < array_region.length; i++) {
                    document.getElementById("main-content").innerHTML +=
                        `<div class="collapsible-trigger">
                            <div id="collapsible-title">
                                ${array_region[i]}
                            </div>
                            <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                        </div>
                    `
                }
            }
        }));
}

function SearchbarPlacement() {
    let searchbar = document.getElementById("searchbar")
        //console.log(searchbar_position, window.scrollY)
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