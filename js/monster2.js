function Api_manager(id, parentId) {
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

function SearchbarPlacement() {
    let searchbar = document.getElementById("searchbar")
    let search_dropdown = document.getElementById("searchbar dropdown")
    if (searchbar_position <= window.scrollY-1) {
        searchbar.style.position = 'fixed'
        searchbar.style.top = '100px'
        if(search_dropdown.style.display === 'flex'){
            search_dropdown.style.position = 'fixed'
            search_dropdown.style.top = '141px'
        }
        if (window.innerWidth >=600){
            if(search_dropdown.style.display === 'flex'){
            document.getElementById('description').style.marginTop = '80px'
            } else {
                document.getElementById('description').style.marginTop = '50px'
            }
        } else {
            if(search_dropdown.style.display === 'flex'){
                document.getElementById('description').style.marginTop = '80px'
            } else{
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