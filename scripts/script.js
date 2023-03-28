function generateQRCode() {
    var qrText = document.getElementById("qr-text").value;
    var qrCodeURL = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + encodeURIComponent(qrText);
    document.getElementById("qr-code").innerHTML = '<img src="' + qrCodeURL + '">';
    document.getElementById("qr-download").innerHTML = '<a href="' + qrCodeURL + '" download="qr-code"><button type="button">Download</button></a>'
  }