function getSort() {
    var typeList = document.getElementsByTagName('input')

    let value = [];

    for (i = 0; i < typeList.length; i++) {
        if (typeList[i].checked) {
            value.push(typeList[i].value)
        }
    }
    return value;
}