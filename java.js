let UserName = function () {
    this.arrAdmin = [["admin", "employee", "customer"], ["123456", "123456", "123456"]];
    this.login = function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (username.trim() === '') {
            alert("Hãy nhập tài khoản nhé");
        } else if (password.trim() === '') {
            alert("Hãy nhập mật khẩu nhé");
        } else {
            for (let i = 0; i < this.arrAdmin[0].length; i++) {
                if (username === this.arrAdmin[0][i] && password === this.arrAdmin[1][i]) {
                    alert("Chào mừng " + this.arrAdmin[0][i] + " đã đăng nhập thành công");
                    return window.location = "add.html";
                }
            }
            alert("Tên đăng nhập hoặc mật khẩu không chính xác");
            clearLogin();
        }
    };
};
function clearLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
let log = new UserName();

var fruitList = [];
function addFruit() {
    const fruitId = document.getElementById("fruitId").value;
    const fruitName = document.getElementById("fruitName").value;
    const fruitPrice = document.getElementById("fruitPrice").value;
    const fruitSource = document.getElementById("fruitSource").value;
    const fruitImage = document.getElementById("fruitImage").value;
    const fruit = {
        "fruitId": fruitId,
        "fruitName": fruitName,
        "fruitPrice": fruitPrice,
        "fruitSource": fruitSource,
        "fruitImage": fruitImage,
    };
    if(curIndex === -1){//chỉ số hiện tại
        add(fruit);
    }else{
        fruitList[curIndex] = fruit;
        curIndex = -1;
        document.getElementById("btnAdd").innerHTML = "Add Fruit";
        displayAll();
    }
}
function displayAll() {
    const detailSL = document.getElementById("detailList");
    detailSL.innerHTML = "";
    for (let i = 0; i < fruitList.length; i++){
        const fruit = fruitList[i];
        detailSL.innerHTML += "<tr>"+
            "<td>"+(i+1)+"</td>"+
            "<td>"+fruit.fruitId+"</td>"+
            "<td>"+fruit.fruitName+"</td>"+
            "<td>"+fruit.fruitPrice+"</td>"+
            "<td>"+fruit.fruitSource+"</td>"+
            "<td><img src='image/'+student.ftl+></td>"+
            "<td><center><button  onclick='edit("+i+")'>Edit</button></center></td>"+
            "<td><center><button  onclick=' onFruitDelete("+i+")'>Delete</button></center></td>"+
            "</tr>"
    }
}
function add(fruit) {
    fruitList.push(fruit);
    console.log(fruitList.length);
    const detailSL = document.getElementById("detailList");
    detailSL.innerHTML += "<tr>"+
        "<td>"+fruitList.length+"</td>"+
        "<td>"+fruit.fruitId+"</td>"+
        "<td>"+fruit.studentName+"</td>"+
        "<td>"+fruit.fruitName+"</td>"+
        "<td>"+fruit.fruitPrice+"</td>"+
        "<td>"+fruit.fruitSource+"</td>"+
        "<td>"+fruit.fruitImage+"</td>"+
        "<td><center><button  onclick='edit("+(fruitList.length - 1)+")'>Edit</button></center></td>"+
        "<td><center><button  onclick='onFruitDelete()'>Delete</button>   </center></td>"+
        "</tr>"
}

var curIndex = -1;
function edit(index) {
    curIndex = index;
    const fruit = fruitList[index];
    document.getElementById("fruidId").value = fruit.fruitId;
    document.getElementById("fruitName").value = fruit.fruitName;
    document.getElementById("fruitPrice").value = fruit.fruitPrice;
    document.getElementById("fruitSource").value = fruit.fruitSource;
    document.getElementById("fruitImage").value = fruit.fruitImage;
    document.getElementById("btnAdd").innerHTML = "Update Fruit";
    displayAll(index);
}
function onFruitDelete(index) {
    if (confirm("Bạn chắc chắn muốn xóa ??")){
        fruitDelete();
        displayAll();
    }
}
function fruitDelete(index) {
    fruitList.splice(index, 1);
}
let str;
function validateId(str) {
    regexp = /^G+[BC]+H+[0-9]{5}$/;
    if(regexp.test(str)){
        alert("ID " + str + " Nhập vào hợp lệ");
    }else{
        alert("ID " + str + " Nhập vào không hợp lệ");
    }
}
function validateName(str) {
    regexp = /^[A-Z]+[a-z]{1,}\s[A-Z]+[a-z]{1,}\s[A-Z]+[a-z]{1,}/;
    if(regexp.test(str)){
        alert("Name " + str + " Nhập vào hợp lệ");
    }else{
        alert("Name " + str + " Nhập vào không hợp lệ");
    }
}
function validatePhone(str) {
    reg = /^\([0-9]{2}\)\-\(0+[0-9]{9}\)$/;
    if(reg.test(str)){
        alert(str + " Là số điện thoại hợp lệ");
    }else{
        alert(str + "Là số điện thoại không hợp lệ");
    }
}
function validateEmail(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]* @[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regexp.test(str)){
        alert("Email " + str + " Nhập vào hợp lệ");
    }else{
        alert("Email " + str + " Nhập vào không hợp lệ");
    }
}
