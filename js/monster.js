var url = `http://localhost:8081/data` //lien api
var searchbar_position = document.getElementById("searchbar").offsetTop - 100
var sort_content = document.getElementById("main-content")
const array_element = ["Neutre", "Ardent", "Électrique", "Aquatique", "Végétal", "Minéral", "Céleste", "Psychique", "Chaotique", "Toxique", "Éthéré"]
const array_region = ["Forêt", "Désert"]
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
                    <div style="width:100px;"></div>
                    <div id="collapsible-title">
                            ${array_region[i]}
                    </div>
                    <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                </div>
                <div id="${array_region[i]}" style="display:none; margin-top: 20px; padding: 15px;">Lorem ipsum dolor sit amet. Ut debitis velit nam suscipit sint et recusandae vitae et labore quisquam et similique voluptate eum saepe suscipit. Ut cumque fugiat et velit molestiae qui nemo delectus a ducimus tempora aut doloremque itaque. Ea
                laudantium fuga et omnis quia est optio voluptate ut voluptatem voluptas et molestiae molestiae et repudiandae excepturi. Est minima explicabo est ratione repellendus in suscipit illum id sunt porro. Sed illo delectus eum maxime voluptatum
                ut autem dolorem. Ea libero repellendus 33 exercitationem suscipit aut similique repellendus aut architecto aliquam au
                </div>
            </div>
            `

    }
    allcontent += `</div>`
    allcontent += `<div id="Element">`
    for (let i = 0; i < array_element.length; i++) {
        allcontent +=
            `<div style="width: 80vw; margin-top: 50px; border-radius: 60px; background-color: #977033;" id="parent-${array_element[i]}">
                <div class="collapsible-trigger" onclick="func(${array_element[i]}, 'parent-${array_element[i]}')">
                    <div style="width:100px;"></div>
                    <div id="collapsible-title">
                            ${array_element[i]}
                    </div>
                    <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                </div>
                <div id="${array_element[i]}"style="display:none; margin-top: 20px; padding: 20px;">Lorem ipsum dolor sit amet. Ut debitis velit nam suscipit sint et recusandae vitae et labore quisquam et similique voluptate eum saepe suscipit. Ut cumque fugiat et velit molestiae qui nemo delectus a ducimus tempora aut doloremque itaque. Ea
                laudantium fuga et omnis quia est optio voluptate ut voluptatem voluptas et molestiae molestiae et repudiandae excepturi. Est minima explicabo est ratione repellendus in suscipit illum id sunt porro. Sed illo delectus eum maxime voluptatum
                ut autem dolorem. Ea libero repellendus 33 exercitationem suscipit aut similique repellendus aut architecto aliquam au
                </div>
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
    document.getElementById("Region").style.flexDirection = "column"
    document.getElementById("Element").style.flexDirection = "column"

    displaycontent()
}

function displaycontent() {
    let sort_type = document.getElementById('sort-btn').textContent
    console.log(sort_type);
    if (sort_type === "Elément") {
        document.getElementById("Element").style.display = "flex"
        document.getElementById("Region").style.display = "none"
    }
    if (sort_type === "Région") {
        document.getElementById("Region").style.display = "flex"
        document.getElementById("Element").style.display = "none"


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

function func(id, parentId) {
    if (id.style.display == "none") {
        id.style.display = "flex"
        document.getElementById(parentId).style.borderRadius = '10px'
        document.querySelector(`#${parentId} #collapsible-img`).style.marginTop = '-40px'
        if (document.querySelector(`#${parentId} .collapsible-trigger`).style.flexDirection == 'row-reverse') {
            document.querySelector(`#${parentId} #collapsible-img`).style.marginLeft = '40px'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginRight = '40px'
        } else {
            document.querySelector(`#${parentId} #collapsible-img`).style.marginRight = '40px'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginLeft = '40px'
        }
    } else {
        id.style.display = "none"
        document.getElementById(parentId).style.borderRadius = '60px'
        document.querySelector(`#${parentId} #collapsible-img`).style.marginTop = '0'
        if (document.querySelector(`#${parentId} .collapsible-trigger`).style.flexDirection == 'row-reverse') {
            document.querySelector(`#${parentId} #collapsible-img`).style.marginLeft = '0'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginRight = '0'
        } else {
            document.querySelector(`#${parentId} #collapsible-img`).style.marginRight = '0'
            document.querySelector(`#${parentId} #collapsible-title`).style.marginLeft = '0'
        }
    }

    if (old_id && old_id != id) {
        old_id.style.display = "none"
        document.getElementById(old_parent_id).style.borderRadius = '60px'
        document.querySelector(`#${old_parent_id} #collapsible-img`).style.marginTop = '0'
        if (document.querySelector(`#${old_parent_id} .collapsible-trigger`).style.flexDirection == 'row-reverse') {
            document.querySelector(`#${old_parent_id} #collapsible-img`).style.marginLeft = '0'
            document.querySelector(`#${old_parent_id} #collapsible-title`).style.marginRight = '0'
        } else {
            document.querySelector(`#${old_parent_id} #collapsible-img`).style.marginRight = '0'
            document.querySelector(`#${old_parent_id} #collapsible-title`).style.marginLeft = '0'
        }
    }
    old_id = id
    old_parent_id = parentId
}