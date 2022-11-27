import React from "react";
import feodosia from './../../assets/image/feodosia.jpg'

export default function Image() {
    function Add(){
        let elem=document.getElementById('feodosia');
        if(!document.getElementById('image')){
            elem.insertAdjacentHTML(
                'afterend', /*після закриваючого тега*/ 
                `<img id="image" src=${feodosia}></img>`
            );
        }
    }   
    
    function Delete(){
        let elem = document.getElementById('image');
        elem.remove();
    }
    
    function Increase(){
        if(document.getElementById('image')){
            let image = document.getElementById('image');
            let imageHeight = +image.offsetHeight;/*висота елемента */
            let imageWidth = +image.offsetWidth;
    
            if(imageHeight<350 && imageWidth<650){
                imageHeight+=50;
                imageWidth+=100;
                image.style.width = imageWidth+'px';
                image.style.height = imageHeight+'px';
            }
        }
    }
    
    function Decrease(){
        if(document.getElementById('image')){
            let image = document.getElementById('image');
            let imageHeight = +image.offsetHeight;/*висота елемента */
            let imageWidth = +image.offsetWidth;
            
            if(imageHeight>50 && imageWidth>100){
                imageHeight-=50;
                imageWidth-=100;
                image.style.width = imageWidth+'px';
                image.style.height = imageHeight+'px';
            }
        }
    }
    
  return (
    <div>
      <a href="https://uk.wikipedia.org/wiki/%D0%A4%D0%B5%D0%BE%D0%B4%D0%BE%D1%81%D1%96%D1%8F">
        <img src={feodosia} alt="Феодосія" weight="750" height="400" />
      </a>
      <br />
      <div className="action_with_image">
        <div>
          <button id="add" onClick={Add}>Добавити</button>
          <button id="increase" onClick={Increase}>Збільшити</button>
          <button id="decrease" onClick={Decrease}>Зменшити</button>
          <button id="delet" onClick={Delete}>Видалити</button>
        </div>
        <div id="feodosia"></div>
      </div>
    </div>
  );
}
