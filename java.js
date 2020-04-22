let UserName = function () {
    this.arrAdmin = [["admin", "employee", "customer"], ["123456", "123456", "123456"]];
    this.login = function () {
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
                    return window.location = "index.html";
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

let fruit = function (id, name, price, source, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.source = source;
    this.image = image;

    this.getId = function () {
        return this.id;
    };

    this.getName = function () {
        return this.name;
    };

    this.getPrice = function () {
        return this.price;
    };

    this.getSource = function () {
        return this.source;
    };

    this.getImage = function () {
        return this.image;
    };
    this.setId = function (fruitId) {
        this.id = fruitId
    };
    this.setName = function (fruitName) {
        this.name = fruitName;
    };
    this.setPrice = function (fruitPrice) {
        this.price = fruitPrice
    };
    this.setSource = function (fruitSource) {
        this.source = fruitSource
    };
    this.setImage = function (fruitImage) {
        this.image = fruitImage
    }
};

let fruitList = [];
function addFruit() {
    let fruitId = document.getElementById("fruitId").value;
    let fruitName = document.getElementById("fruitName").value;
    let fruitPrice = document.getElementById("fruitPrice").value;
    let fruitSource = document.getElementById("fruitSource").value;
    let fruitImage = document.getElementById("fruitImage").value;
    let createprice=Number(fruitPrice);
    if (fruitId == ""||fruitName ==""||
        fruitPrice == ""||fruitSource ==""||fruitImage==''||!createprice){
        alert("Bạn chưa nhập hoặc đã nhập sai thông tin.");
    }else {
        alert("Cập nhật sản phẩm thành công.");
        let fruit1 = new fruit(fruitId , fruitName , fruitPrice , fruitSource , fruitImage);
        fruitList.push(fruit1);
        document.getElementById("fruitId").value = '';
        document.getElementById("fruitName").value = '';
        document.getElementById("fruitPrice").value = '';
        document.getElementById("fruitSource").value = '';
        document.getElementById("fruitImage").value = '';
        document.getElementById("fruitId").focus();
    }
    loadFullScreen(fruitList);
}

let row = "";

function loadFullScreen() {
    row = "";
    for (let i = 0; i < fruitList.length; i++) {
        row += "<tr><td>" + fruitList[i].getId() + "</td><td>" + fruitList[i].getName()
            + "</td><td>" + fruitList[i].getPrice() + "</td><td>" + fruitList[i].getSource()
            + "</td><td><center><img height='200px' src="+fruitList[i].getImage()+"></center> </td>"
            + "<td><center><button id='btnEdit' onclick='edit(" + i + ")'>Edit</button></center></td>"
            + "<td><center><button  onclick=' fruitDelete(" + i + ")'>Delete</button></center></td></tr>";
        document.getElementById("detailList").innerHTML = row;
    }

}
let ret;
function edit(index) {
    ret = index;

    document.product.fruitId.value= fruitList[index].getId();
    document.product.fruitName.value= fruitList[index].getName();
    document.product.fruitPrice.value= fruitList[index].getPrice();
    document.product.fruitSource.value= fruitList[index].getSource();
    document.product.fruitImage.value= fruitList[index].getImage();

    document.getElementById("btnEdit").disabled = false;
    document.getElementById("btnAdd").disabled = true;
}
function saveFruit(index) {
    index = ret ;
    console.log(index)
    // Khai báo các biến có giá trị nhập váo trường ô inputt text cho các biến đó
    let fruitId =document.getElementById("fruitId").value;
    let fruitName =document.getElementById("fruitName").value;
    let fruitPrice =document.getElementById("fruitPrice").value;
    let fruitSource=document.getElementById("fruitSource").value;
    let fruitImage=document.getElementById("fruitImage").value;

    let createPrice = Number(fruitPrice);
    if (fruitId == ""||fruitName ==""||fruitPrice == ""||fruitSource =="" || fruitImage == ""||!createPrice){
        alert("Nhập thiếu thông tin,Hoặc đã sai thông tin");
    }else {
        alert("Sửa thành công");
        fruitList[index].setId(fruitId);
        fruitList[index].setName(fruitName);
        fruitList[index].setPrice(fruitPrice);
        fruitList[index].setSource(fruitSource);
        fruitList[index].setImage(fruitImage);

        //xóa trống bảng thông tin sinh viên trong trường nhập
        document.getElementById("fruitId").value='';
        document.getElementById("fruitName").value='';
        document.getElementById("fruitPrice").value='';
        document.getElementById("fruitSource").value='';
        document.getElementById("fruitImage").value='';
        document.getElementById("fruitId").focus(); // chỏ chuột vào trường nhập thông tin

        document.getElementById("btnEdit").disabled = true;
        document.getElementById("btnAdd").disabled = false;
    }
    loadFullScreen(index);
}

function fruitDelete(index) {
    let del = confirm("Bạn chắc chắn muốn xóa sản phẩm ko?");
    console.log(index);
    if (del) {
        fruitList.splice(index, 1);

        document.getElementById("fruitId").value='';
        document.getElementById("fruitName").value='';
        document.getElementById("fruitPrice").value='';
        document.getElementById("fruitSource").value='';
        document.getElementById("fruitImage").value='';

        document.getElementById("btnEdit").disabled = true;
        document.getElementById("btnAdd").disabled = false;
    }
    loadFullScreen();
}