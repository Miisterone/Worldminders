var url = `http://localhost:8081/data` //lien api
var searchbar_position = document.getElementById("searchbar").offsetTop - 100
var sort_content = document.getElementById("main-content")
const array_element = ["Neutre", "Ardent", "Électrique", "Aquatique", "Végétal", "Minéral", "Céleste", "Psychique", "Chaotique", "Toxique", "Éthéré"]
const array_region = ["Forêt", "Désert"]
var old_id;

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
            `<div>
                <div class="collapsible-trigger" onclick="func(${array_region[i]})">
                    <div style="width:100px;"></div>
                    <div id="collapsible-title">
                            ${array_region[i]}
                    </div>
                    <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                </div>
                <div id="${array_region[i]}" style="display:none">Lorem ipsum dolor sit amet. Ut debitis velit nam suscipit sint et recusandae vitae et labore quisquam et similique voluptate eum saepe suscipit. Ut cumque fugiat et velit molestiae qui nemo delectus a ducimus tempora aut doloremque itaque. Ea
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
            `<div>
                <div class="collapsible-trigger" onclick="func(${array_element[i]})">
                    <div style="width:100px;"></div>
                    <div id="collapsible-title">
                            ${array_element[i]}
                    </div>
                    <img class = "bd-solid bd-orange dark-4" src="../images/black-img.png" id="collapsible-img" alt="test-png">
                </div>
                <div id="${array_element[i]}"style="display:none">Lorem ipsum dolor sit amet. Ut debitis velit nam suscipit sint et recusandae vitae et labore quisquam et similique voluptate eum saepe suscipit. Ut cumque fugiat et velit molestiae qui nemo delectus a ducimus tempora aut doloremque itaque. Ea
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

function func(id) {
    if (old_id) old_id.style.display = "none"
    if (id.style.display == "none") id.style.display = "flex"
    else id.style.display = "none"
    old_id = id
}