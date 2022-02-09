var url = `http://localhost:8081/data` //lien api
var searchbar_position = document.getElementById("searchbar").offsetTop - 100
var sort_content = document.getElementById("main-content")
const array_element = ["Neutre", "Ardent", "Électrique", "Aquatique", "Végétal", "Minéral", "Céleste", "Psychique", "Chaotique", "Toxique", "Éthéré"]
const array_region = ["Forêt", "Désert"]
const array_physical_trait = ["Canidé", "Félin", "Oiseau", "Rongeur", "Reptile", "Insecte", "Poisson", "Éctoplasme", "Dragon", "Mutant"]

var old_id;
var old_parent_id;

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
            `<div style="width: 80vw; margin-top: 50px; border-radius: 60px; background-color: #977033;" id="parent-${array_region[i]}">
                <div class="collapsible-trigger" onclick="func(${array_region[i]}, 'parent-${array_region[i]}')">
                    <div id="collapsible-margin"></div>
                    <div id="collapsible-title">
                            ${array_region[i]}
                    </div>
                    <div class = "bd-solid bd-orange dark-4" id="collapsible-img-container">
                    <img src="${img_src}" id="collapsible-img" alt="region.png">
                    </div>
                </div>
                <div id="${array_region[i]}" style="display:none; margin-top: 20px; padding: 15px; justify-content: center; flex-wrap: wrap;">`
            /*
                for (let value in data) {
                    if (data[value].region == array_region[i]) {
                        allcontent += `<<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; margin: 25px 25px;" ><img id="monster-img" src="${data[value].image}"> 
                <span id="monster-name">${data[value].nom}</span></div>``
                    }
                }
*/
        allcontent += `<div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
        <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>`

        allcontent += `</div>
            </div>
            `

    }
    allcontent += `</div>`
    allcontent += `<div id="Element">`
    for (let i = 0; i < array_element.length; i++) {
        var img_src = "../images/type_logo/" + array_element[i] + ".png"
        allcontent +=
            `<div style="width: 80vw; margin-top: 50px; border-radius: 60px; background-color: #977033;" id="parent-${array_element[i]}">
                <div class="collapsible-trigger" onclick="func(${array_element[i]}, 'parent-${array_element[i]}')">
                    <div id="collapsible-margin"></div>
                    <div id="collapsible-title">
                            ${array_element[i]}
                    </div>
                    <div class = "bd-solid bd-orange dark-4" id="collapsible-img-container">
                    <img src="${img_src}" id="collapsible-img" alt="element.png">
                    
                    </div>
                </div>
                <div id="${array_element[i]}"style="display:none; margin-top: 20px; padding: 25px; justify-content: center; flex-wrap: wrap;">`

        for (let value in data) {
            if (data[value].type == array_element[i]) {
                allcontent += `<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; margin: 25px 25px;" ><img id="monster-img" src="${data[value].image}"> 
                <span id="monster-name">${data[value].nom}</span></div>`
            }
        }

        allcontent += `<div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>`

        allcontent += `</div>
            </div>
            `
    }
    allcontent += `</div>`

    allcontent += `<div id="Physical-trait">`
    for (let i = 0; i < array_physical_trait.length; i++) {
        var img_src = "../images/physical_traits_logo/" + array_physical_trait[i] + ".png"
        allcontent +=
            `<div style="width: 80vw; margin-top: 50px; border-radius: 60px; background-color: #977033;" id="parent-${array_physical_trait[i]}">
                <div class="collapsible-trigger" onclick="func(${array_physical_trait[i]}, 'parent-${array_physical_trait[i]}')">
                    <div id="collapsible-margin"></div>
                    <div id="collapsible-title">
                            ${array_physical_trait[i]}
                    </div>
                    <div class = "bd-solid bd-orange dark-4" id="collapsible-img-container">
                    <img src="${img_src}" id="collapsible-img" alt="element.png">
                    </div>
                </div>
                <div id="${array_physical_trait[i]}"style="display:none; margin-top: 20px; padding: 25px; justify-content: center; flex-wrap: wrap;">`
            /*
                    for (let value in data) {
                        if (data[value].physcical_trait == array_physical_trait[i]) {
                            allcontent += `<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; margin: 25px 25px;" ><img id="monster-img" src="${data[value].image}"> 
                            <span id="monster-name">${data[value].nom}</span></div>``
                        }
                    }
            */
        allcontent += `<div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>
                    <div style="width: 200px; height: 200px; background: black; margin: 25px 25px"></div>`

        allcontent += `</div>
            </div>
            `
    }
    allcontent += `</div>`
    sort_content.innerHTML = allcontent

    let element = document.querySelectorAll(".collapsible-trigger")

    for (let i = 0; i < element.length; i++) {
        if (i % 2 == 0) {
            element[i].style.flexDirection = "row-reverse"
        }
    }

    document.getElementById("Element").style.display = "none"
    document.getElementById("Region").style.display = "none"
    document.getElementById("Physical-trait").style.display = "none"
    document.getElementById("Region").style.flexDirection = "column"
    document.getElementById("Element").style.flexDirection = "column"
    document.getElementById("Physical-trait").style.flexDirection = "column"

    displaycontent()
}

function displaycontent() {
    let sort_type = document.getElementById('sort-btn').textContent
    if (sort_type === "Elément") {
        document.getElementById("Element").style.display = "flex"
        document.getElementById("Region").style.display = "none"
        document.getElementById("Physical-trait").style.display = "none"
    }
    if (sort_type === "Région") {
        document.getElementById("Region").style.display = "flex"
        document.getElementById("Element").style.display = "none"
        document.getElementById("Physical-trait").style.display = "none"
    }
    if (sort_type === "Trait physique") {
        document.getElementById("Physical-trait").style.display = "flex"
        document.getElementById("Element").style.display = "none"
        document.getElementById("Region").style.display = "none"
    }
}

function SearchbarPlacement() {
    let searchbar = document.getElementById("searchbar")
    let search_dropdown = document.getElementById("searchbar dropdown")
    if (searchbar_position <= window.scrollY - 1) {
        searchbar.style.position = 'fixed'
        searchbar.style.top = '100px'
        if (search_dropdown.style.display === 'flex') {
            search_dropdown.style.position = 'fixed'
            search_dropdown.style.top = '141px'
        }
        if (window.innerWidth >= 600) {
            if (search_dropdown.style.display === 'flex') {
                document.getElementById('description').style.marginTop = '80px'
            } else {
                document.getElementById('description').style.marginTop = '50px'
            }
        } else {
            if (search_dropdown.style.display === 'flex') {
                document.getElementById('description').style.marginTop = '80px'
            } else {
                document.getElementById('description').style.marginTop = '45px'
            }
        }
    } else {
        searchbar.style.position = 'relative'
        searchbar.style.top = 'auto'
        document.getElementById('description').style.marginTop = '0px'
        search_dropdown.style.position = 'relative'
        search_dropdown.style.top = 'auto'
    }
}

function func(id, parentId) {
    if (id.style.display == "none") {
        id.style.display = "flex"
        document.getElementById(parentId).style.borderRadius = '10px'
        document.querySelector(`#${parentId} #collapsible-img-container`).style.marginTop = '-40px'
        if (document.querySelector(`#${parentId} .collapsible-trigger`).style.flexDirection == 'row-reverse') {
            document.querySelector(`#${parentId} #collapsible-img-container`).style.marginLeft = '40px'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginRight = '40px'
        } else {
            document.querySelector(`#${parentId} #collapsible-img-container`).style.marginRight = '40px'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginLeft = '40px'
        }
    } else {
        id.style.display = "none"
        document.getElementById(parentId).style.borderRadius = '60px'
        document.querySelector(`#${parentId} #collapsible-img-container`).style.marginTop = '0'
        if (document.querySelector(`#${parentId} .collapsible-trigger`).style.flexDirection == 'row-reverse') {
            document.querySelector(`#${parentId} #collapsible-img-container`).style.marginLeft = '0'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginRight = '0'
        } else {
            document.querySelector(`#${parentId} #collapsible-img-container`).style.marginRight = '0'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginLeft = '0'
        }
    }

    if (old_id && old_id != id) {
        old_id.style.display = "none"
        document.getElementById(old_parent_id).style.borderRadius = '60px'
        document.querySelector(`#${old_parent_id} #collapsible-img-container`).style.marginTop = '0'
        if (document.querySelector(`#${old_parent_id} .collapsible-trigger`).style.flexDirection == 'row-reverse') {
            document.querySelector(`#${old_parent_id} #collapsible-img-container`).style.marginLeft = '0'
            document.querySelector(`#${old_parent_id} #collapsible-title`).style.marginRight = '0'
        } else {
            document.querySelector(`#${old_parent_id} #collapsible-img-container`).style.marginRight = '0'
            document.querySelector(`#${old_parent_id} #collapsible-title`).style.marginLeft = '0'
        }
    }
    old_id = id
    old_parent_id = parentId
}