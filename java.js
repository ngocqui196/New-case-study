// let listFruit = [];
// function nameFruit(creatName) {
//     if (creatName.length >= 2) {
//         listFruit.push(creatName);
//         return true;
//     } else {
//         return false;
//     }
// }
// let listSource = [];
// function sourceFruit(creatSource) {
//     if (creatSource.length >= 2) {
//         listSource.push(creatSource);
//         return true;
//     } else {
//         return false;
//     }
// }
// let listValue = [];
// function valueFruit(creatValue) {
//     if (creatValue.length >= 5) {
//         listValue.push(creatValue);
//         return true;
//     } else {
//         return false;
//     }
// }

 let fruitList = function(img, name, souce, value) {
    this.img = img;
    this.name = name;
    this.source = souce;
    this.value = value;
    this.getImg = function () {
        return this.img;
    }
    this.getName = function () {
        return this.name;
    }
    this.getSource = function () {
        return this.source;
    }
    this.getValue = function () {
        return this.value;
    }
};
let count =0;
let listFruit = new Array();
function creatNewFruit() {
    count ++;
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let value = document.getElementById("value").value;
    let fruit1 = new fruitList(count, img, name, source, value,);
    listFruit.push(fruit1)
    upAllScreen();
}


function upAllScreen() {
    let print = document.getElementById("listFruit");
    let row = "";
    for (let i = 0; i < listFruit.length; i ++) {
        row += '<img src="' +listFruit[i].getImg()+ '"/>' + "<br>"  +
            listFruit[i].getName() + "<br>" +
            listFruit[i].getSource() + "<br>" +
            listFruit[i].getValue();

    }
    print.innerHTML = row;
    //document.getElementById("main").innerHTML = row;
}