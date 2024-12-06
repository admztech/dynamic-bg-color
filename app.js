let colors = document.querySelectorAll('.color');
let page = document.querySelector('body');
let clrHeading = document.querySelector('#clrHeading');
let clrInfo = document.querySelector('#clrInfo');

for (let color of colors){
    color.addEventListener('click', function(){
        clrHeading.innerText = "";
        clrInfo.innerHTML = "";
        clrInfo.style.display = 'block';
        console.log(color.id);
        page.style.backgroundColor = color.id;

        switch(color.id){
            case "grey":
                clrHeading.innerText = "Grey";
                clrInfo.innerHTML = "<strong>Grey</strong> is often associated with neutrality, balance, and calmness. It can represent a sense of sophistication and maturity, or sometimes detachment."
                break;

            case "yellow":
                clrHeading.innerText = "Yellow";
                clrInfo.innerHTML = "<strong>Yellow</strong> is typically linked with positivity, happiness, and energy. It is often associated with creativity, optimism, and a sense of cheerfulness."
                break;
            case "green":
                    clrHeading.innerText = "Green";
                    clrInfo.innerHTML = "<strong>Green</strong> symbolizes nature, growth, and tranquility. It is often seen as a calming color that represents health, balance, and renewal."
                    break;
            case "blue":
                    clrHeading.innerText = "Blue";
                    clrInfo.innerHTML = "<strong>Blue</strong> is associated with calmness, stability, and trust. It represents wisdom, serenity, and reliability, often evoking a sense of peace and harmony."
                    break;
            default :
            console.log("Invalid value");
        }
    })
}
