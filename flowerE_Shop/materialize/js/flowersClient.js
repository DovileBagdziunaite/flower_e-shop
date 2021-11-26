function getFlowers() {
    return fetch("http://dovilebagdziun-001-site1.dtempurl.com/api/Flowers/list").then(response => response.json())
}

function createFlower(flower) {
    return fetch(
        "http://dovilebagdziun-001-site1.dtempurl.com/api/Flowers",
        {
            method: "POST",
            headers:{
                "Content-Type": "apllication/json;charset-UTF-8"
            },
            body: JSON.stringify(flower)
        }
    ).then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            alert("There are problems!");
        }
    })
}