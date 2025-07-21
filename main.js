let QRCanvas = document.getElementById("QR-Canvas")
let QRImg = document.getElementById("QRImg")
let Content = document.getElementById("Content")
function generateQR(){
    if(Content.value.length > 0){
        QRImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Content.value;
        Content.classList.add("show-img");
    }
}