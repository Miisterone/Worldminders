var url = `http://localhost:8081/data` //lien api
var searchbar_position = document.getElementById("searchbar").offsetTop - 100
var sort_content = document.getElementById("main-content")
const array_element = ["Neutre", "Ardent", "Électrique", "Aquatique", "Végétal", "Minéral", "Céleste", "Psychique", "Chaotique", "Toxique", "Éthéré"]
const array_region = ["Forêt", "Désert"]

let exampleDropdown = new Axentix.Dropdown('#sort-dropdown', {
    animationType: 'fade',
    animationDuration: 200
});

///////////////FUNCTION//////////////////

async function printcontent() {
    const req = await fetch(url)
    const data = await req.json()

    console.log(data);
    var allcontent = ""
    allcontent += `<div id="Region">`
    for (let i = 0; i < array_region.length; i++) {
        allcontent +=
            `<div id="${array_region[i]}" class="collapsible-trigger">
                    <div id="collapsible-title">
                        ${array_region[i]}
                    </div>
                    <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                </div>
            `
    }
    allcontent += `</div>`
    allcontent += `<div id="Element">`
    for (let i = 0; i < array_element.length; i++) {
        allcontent +=
            `<div id="${array_element[i]}" class="collapsible-trigger">
                    <div id="collapsible-title">
                        ${array_element[i]}
                    </div>
                    <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                </div>
            `
    }
    allcontent += `</div>`
    sort_content.innerHTML = allcontent
    document.getElementById("Element").style = "display:none;"
    document.getElementById("Region").style = "display:none;"
    displaycontent()
}

function displaycontent() {
    let sort_type = document.getElementById('sort-btn').textContent
    console.log(sort_type);
    if (sort_type == "Elément") {
        document.getElementById("Element").style = "display:flex; flex-direction: column;"
        document.getElementById("Region").style = "display:none; "
    }
    if (sort_type == "Région") {
        document.getElementById("Element").style = "display:none; "
        document.getElementById("Region").style = "display:flex; flex-direction: column;"
    }
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