////////////////EVENT////////////////////


window.onresize = function(event) {
    let container_above = document.getElementById("top-container")
    searchbar_position = container_above.offsetTop + container_above.offsetHeight - 40;
    if (innerWidth>600 && document.getElementById('searchbar dropdown').style.display !== 'none'){
        document.getElementById('searchbar dropdown').style.display = 'none'
    }
    SearchbarPlacement()
}

window.onscroll = function(event) {
    SearchbarPlacement()
}

document.getElementById("sort-Element").addEventListener('click', () => {
    document.getElementById('sort-btn').textContent = 'Elément'
    displaycontent()
})

document.getElementById("sort-Region").addEventListener('click', () => {
    document.getElementById('sort-btn').textContent = 'Région'
    displaycontent()
})

document.getElementById("sort-Physical-trait").addEventListener('click', () => {
    document.getElementById('sort-btn').textContent = 'Trait physique'
    displaycontent()
})

document.getElementById("responsive search button").addEventListener('click', () => {
    let search_dropdwon = document.getElementById('searchbar dropdown')
    if (search_dropdwon.style.display === 'flex'){
        search_dropdwon.style.display = 'none'
    } else {
        search_dropdwon.style.display = 'flex'
    } 
})


/*
let collapsible = document.querySelectorAll('.collapsible-trigger')

for (let val of collapsible) {
    console.log(val);
    val.addEventListener('click', () => {
        console.log(val.getAttribute("id"))
        console.log('test')
    })
}
*/