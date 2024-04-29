import { CONTAINER } from "./constants/dom.js"
import { CarService } from "./service/carService.js"
import { MyHtmlFactory } from "./factory/MyHtmlFactory.js"
// destructuring autrement j'ouvre le sac (fichier ) et je pioche dans le sac ce qui m'intéresse

// séparation des responsabilités
window.addEventListener('DOMContentLoaded', async() => {
    const cars = await CarService.getCars()        
    for(const index in cars){

        MyHtmlFactory.createArticle(CONTAINER,"",`car-card-${index}`)
        const articleCard = document.getElementById(`car-card-${index}`)
        MyHtmlFactory.createImage(articleCard, [
            `src*${cars[index].url}`, `alt*${cars[index].name}`
        ])
        MyHtmlFactory.createParagraph(articleCard, cars[index].description)
  
    }

})