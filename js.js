let listFruit = [];
function nameFruit(creatName) {
    if (creatName.length >= 2) {
        listFruit.push(creatName);
        return true;
    } else {
        return false;
    }
}
let listSource = [];
function sourceFruit(creatSource) {
    if (creatSource.length >= 2) {
        listSource.push(creatSource);
        return true;
    } else {
        return false;
    }
}
let listValue = [];
function valueFruit(creatValue) {
    if (creatValue.length >= 5) {
        listValue.push(creatValue);
        return true;
    } else {
        return false;
    }
}

function creatNewFruit() {
    let creatName =document.getElementById("name").value;
    let creatSource = document.getElementById("source").value;
    let creatValue = document.getElementById("value").value;
    if (nameFruit(creatName) && sourceFruit(creatSource) && valueFruit(creatValue)) {
        alert("Đã thêm thành công");
        document.getElementById("name").value = "";
    }else {
        alert("Không có tên quả này!")
        document.getElementById("name").focus();
    }
    showListFruit();
}
function showListFruit() {
    let data = "<can"
}