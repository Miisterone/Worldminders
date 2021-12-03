const { type } = require("os")

var url = `` //lien api


function getType() {
    var typeList = document.getElementsByTagName('input')


    for (i = 0; i < typeList.length; i++) {
        console.log(typeList[i].checked)
    }
}