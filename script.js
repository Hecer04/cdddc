// 1. Button-a click edəndə yazısını və rəngini dəyişin
// 2. Button-a click edəndə div-in rəngini dəyişin və yumru formada göstərin
// 3. Button-a click edəndə p-nin içərisində daxil etdiyiniz ədədi 5 5 azaldın.
// 4. Button-a click edəndə yeni element yaradıb içərisinə söz daxil edib, div-in içərisinə göndərin.
// 5. Button-a click edəndə divin yerini dəyişin.
// 6. Button-a click edəndə div-i ekrandan silin.




//Button-a click edəndə yazisini və rənginin dəyişməsi.
let btn_1=document.querySelector("#button-1");
const ColorButton=() =>{
    btn_1.style.backgroundColor="red";
    btn_1.innerHTML="Clicked";
}
btn_1.addEventListener("click", ColorButton);



 
//Buttona clck edəndə divin rəngini dəyişin və yumru formada göstərin.
let CircleDiv=document.querySelector("#circle");
CircleDiv.classList.add("circle");
let btn_2=document.querySelector("#button-2");
const DivColorAndSize=() =>{
    CircleDiv.classList.toggle("circle1");
    btn_2.innerHTML="Square";
};
btn_2.addEventListener("click",DivColorAndSize);



// 5-5 azalmaq.
let pElement = document.querySelector("#eded");
let btn_3 = document.querySelector("#button-3");
btn_3.addEventListener("click", function () {
    let number = Number(pElement.innerHTML);
    let azalma = setInterval(function () {
        number-=5;
        pElement.innerHTML = number;
        // if (number > 5) {
        //     number -= 5;
        //     pElement.innerHTML = number;
        // } else {
        //     clearInterval(azalma);
        // };
        return azalma;
    }, 1000);
});



//Buttona click edəndə yeni element əlavə etməkk
document.querySelector("#wrap").classList.add("wrap");
document.querySelector("#button-4").addEventListener("click", function () {
    let newDiv = document.createElement("div");
    let textNode = document.createTextNode("Yeni söz");
    newDiv.appendChild(textNode);
    document.querySelector("#wrap").appendChild(newDiv);
});



//Click edəndə divin yerinin dəyişməsi
document.querySelector("#button-5").addEventListener("click", function(){
    document.querySelector("#hereket").classList.toggle("movement");
    document.querySelector("#button-5").innerHTML="Əvvəlki yerinə gətir"
});



//divin yox edilməsi
document.querySelector("#button-6").addEventListener("click", function(){
    document.querySelector("#gizli").classList.toggle("hidden");
});