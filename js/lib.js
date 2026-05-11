const productList = [
    {
        id: "01",
        name: "Hoa Cúc",
        price: 250,
        image: "../asset/images/hoa-cuc.jpg",
        productLink: "product-detail.html",
        description: "Hoa cúc tươi, thơm nhẹ, phù hợp cắm trang trí và làm quà tặng.",
        origin: "Đà Lạt"
    },
    {
        id: "02",
        name: "Hoa Hồng",
        price: 210,
        image: "../asset/images/hoa-hong.jpg",
        productLink: "product-detail.html",
        description: "Hoa hồng đỏ nồng nàn, tượng trưng cho tình yêu và lãng mạn.",
        origin: "Hà Nội"
    },
    {
        id: "03",
        name: "Hoa sen",
        price: 240,
        image: "../asset/images/hoa-sen.jpg",
        productLink: "product-detail.html",
        description: "Hoa sen thanh khiết, tượng trưng cho sự tinh khiết và may mắn.",
        origin: "Huế"
    },
    {
        id: "04",
        name: "Hoa Thiên Lý",
        price: 250,
        image: "../asset/images/hoa-thien-ly.jpg",
        productLink: "product-detail.html",
        description: "Hoa thiên lý thơm dịu, dùng để trang trí và làm thuốc theo y học dân gian.",
        origin: "Đồng Tháp"
    },
];

function getProductById(id) {
    return productList.find(product => product.id === id);
}

function addProduct(id, name, price, image, hyperLink, description, origin) 
{
    // Tạo thẻ div khung chứa 1 sản phẩm - product item
    const productItem = document.createElement("div");

    // Thêm thuộc tính cho thẻ div (Dùng class 'col' của Bootstrap để chia cột)
    productItem.setAttribute("class", "product-item col");

    // Tạo khung số 1 - chứa ảnh - product image
    const productImage = document.createElement("div");

    // Thêm thuộc tính cho thẻ div
    productImage.setAttribute("class", "product-image");

    // Thêm ảnh vào khung chứa kèm các class viền ảnh của Bootstrap
    const myImage = document.createElement("img");
    myImage.setAttribute("src", image);
    myImage.setAttribute("alt", name);
    myImage.setAttribute("class", "img-thumbnail img-fluid");
    myImage.style.height = "250px";
    myImage.style.width = "250px";

    // Gắn hình vào khung chứa product image
    productImage.appendChild(myImage);

    // Tạo khung số 2 - chứa thông tin sản phẩm - product info
    const productInfo = document.createElement("div");

    // Thêm thuộc tính cho thẻ div (Dùng 'text-center' để canh giữa chữ)
    productInfo.setAttribute("class", "product-info text-center");

    // Thêm đối tượng p, a cho khung chứa product info (Tên hoa)
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    // Gắn vào khung chứa
    productInfo.appendChild(productName);
    // Thêm đối tượng p, a cho khung chứa product info (Giá tiền màu đỏ, in đậm)
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price + "/túi");
    productPrice.setAttribute("class", "text-danger font-weight-bolder");
    productPrice.appendChild(productPriceText);

    // Gắn vào khung chứa
    productInfo.appendChild(productPrice);

    // Tạo nút bấm 'Xem chi tiết' màu xanh
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.setAttribute("href", hyperLink + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info");
    productLink.appendChild(productLinkText);

    // Gắn link cho product Info
    productInfo.appendChild(productLink);

    // Gắn 2 khung chứa image và info vào product item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Gắn product item vào product list
    document.getElementById("product-list").appendChild(productItem);
}