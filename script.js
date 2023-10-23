document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const generateButton = document.getElementById("generateButton");
    const qrcodeDiv = document.getElementById("qrcode");
    const downloadLink = document.getElementById("downloadLink");

    generateButton.addEventListener("click", function() {
        const data = inputText.value;

        // Check if the input is not empty
        if (data.trim() === "") {
            alert("Please enter some text.");
            return;
        }

        qrcodeDiv.innerHTML = "";

        // Create a QRCode instance
        const qrcode = new QRCode(qrcodeDiv, {
            text: data,
            width: 128,
            height: 128
        });

        downloadLink.href = qrcodeDiv.querySelector('canvas').toDataURL("image/png");
        downloadLink.style.display = "block";
    });
});
