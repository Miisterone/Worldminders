////////////////EVENT////////////////////


window.onresize = function(event) {
    let container_above = document.getElementById("top-container")
    searchbar_position = container_above.offsetTop + container_above.offsetHeight - 40;
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

let collapsible = document.querySelectorAll('.collapsible-trigger')

for (let val of collapsible) {
    console.log(val);
    val.addEventListener('click', () => {
        console.log(val.getAttribute("id"))
        console.log('test')
    })
}