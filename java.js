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
};

let fruitList = [];
function addFruit() {
    let fruitId = document.getElementById("fruitId").value;
    let fruitName = document.getElementById("fruitName").value;
    let fruitPrice = document.getElementById("fruitPrice").value;
    let fruitSource = document.getElementById("fruitSource").value;
    let fruitImage = document.getElementById("fruitImage").value;
    let fruit1 = new fruit(fruitId, fruitName, fruitPrice, fruitSource, fruitImage);
    fruitList.push(fruit1);
    loadFullScreen();
}

let row = "";

function loadFullScreen() {
    row = "";
    for (let i = 0; i < fruitList.length; i++) {
        row += "<tr><td>" + fruitList[i].getId() + "</td><td>" + fruitList[i].getName()
            + "</td><td>" + fruitList[i].getPrice() + "</td><td>" + fruitList[i].getSource()
            + "</td><td><center><img height='200px' src="+fruitList[i].getImage()+"></center> </td>"
            + "<td><center><button  onclick='edit(" + i + ")'>Edit</button></center></td>"
            + "<td><center><button  onclick=' fruitDelete(" + i + ")'>Delete</button></center></td></tr>";
        document.getElementById("detailList").innerHTML = row;
    }

}

function edit(index) {
    let fruit = fruitList[index];
    fruit.id = document.getElementById("fruitId").value;
    fruit.name = document.getElementById("fruitName").value;
    fruit.price = document.getElementById("fruitPrice").value;
    fruit.source = document.getElementById("fruitSource").value;
    fruit.image = document.getElementById("fruitImage").value;
    fruitList[index] = fruit;
    loadFullScreen();
}


function fruitDelete(index) {
    let del = confirm("Bạn chắc chắn muốn xóa " + fruitList[index]);
    if (del === true) {
        fruitList.splice(index, 1);
    }
    loadFullScreen();
}