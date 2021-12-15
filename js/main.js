var url = `http://localhost:8081/data` //lien api



function showmonsters() {
    let types = getType()
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data)
            document.getElementById("main").innerHTML = `<div id="img-title">
            <img src="../images/FontP.jpg" alt="Forest" style="width: 100%";>
            <div class="title"> Les créatures d'Aniphis</div>
        </div>`

            for (i = 0; i < data.length; i++) {
                if (types.includes(data[i].type) || types.length == 0) {
                    document.getElementById("main").innerHTML +=
                        `<div class="monsters-block" id="monsters-block">
                    <div class="" id="monsters-description">
                        <p>${data[i].description}</p>
                        </div>
                        <div class="" id="monsters-img">
                        <img class="" src="${data[i].image}" style="max-height: 400px;" alt="" />
                        </div>
                       `
                }
            }
        })
    );
}