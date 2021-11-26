function displayFlowers(flowers, element){

    let allItems = "";
    for (let index = 0; index < flowers.length; index++) {
        const flower = flowers[index];

        let template = '<div class="box"> <div class="content"> <img id="img" src="{{image}}" alt=""> <div>Id: {{id}}</div><div class="title"><q>{{title}}</q></div><div class="cont"> <div class="price"> <div>{{price}} Eur</div></div><div class="discount"> <div>Nuolaida:</div><div>{{discount}} Eur</div></div><div>{{kind}}</div><div>{{description}}</div></div><a href="hydrangea.html" target="_blank">Plačiau skaitykite ► </a> </div></div>';    
        
        // ("{{ka mes isirasome i template}}")", po kablelio rasome kas ateina is duonbazes
        template = template.replaceAll("{{image}}", flower.flowerPhoto);
        template = template.replaceAll("{{id}}", flower.flowerId);
        template = template.replaceAll("{{title}}", flower.flowerName);
        template = template.replaceAll("{{price}}", flower.flowerStartingPrice);
        template = template.replaceAll("{{discount}}", flower.flowerDiscount);
        template = template.replaceAll("{{kind}}", flower.flowerKind);
        template = template.replaceAll("{{description}}", flower.flowerDescription);

        allItems += template;
    }

    element.innerHTML = allItems;
}