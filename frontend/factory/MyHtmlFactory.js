class MyHtmlElement {
  constructor(parent) {
    this.parent = parent;
    
  }
}

class MyArticle extends MyHtmlElement {
  // environnement d'exécution
  constructor(parent, className, id) { 
    super(parent);
    this.element = document.createElement('article')
    if(className){
      this.element.classList.add(className)
    } 
    if(id){
      this.element.id = id
    }
    this.parent.appendChild(this.element)
  }
}

class MyImage extends MyHtmlElement {
  constructor(parent, attributes, className, id) {
    super(parent);
    const figure = document.createElement('figure')
    this.element = document.createElement('img')
    for(const attribute of attributes){
        /*key:value*/
        console.log(attribute)
        const key = attribute.split('*')[0];
        const val = attribute.split('*')[1];
        console.log(key, val)
        this.element.setAttribute(key, val)
    }

    if(className){
      this.element.classList.add(className)
    } 
    if(id){
      this.element.id = id
    }

    figure.appendChild(this.element)
    this.parent.appendChild(figure)
  }
}

class MyParagraph extends MyHtmlElement {
    constructor(parent, data, className, id){
        super(parent)
        this.element = document.createElement('p')
        this.element.innerText = data
        this.parent.appendChild(this.element)
        if(className){
          this.element.classList.add(className)
        } 
        if(id){
          this.element.id = id
        }
    }
  
}

export class MyHtmlFactory {
  //il y a les méthodes de classe qu'on appelle SUR la classe
  // et il y a les méthodes d'instance qui sont intrinsèque à l'instant
  // autrement à l'exemplaire de la classe

  //abstraction  =>
  static createArticle(parent, className,id) {
    return new MyArticle(parent, className, id);
  }

  static createParagraph(parent, data, className, id){
    return new MyParagraph(parent, data,className, id)
  }

  static createImage(parent, attributes, className, id){
    return new MyImage(parent,attributes,  className, id)
  }
}
