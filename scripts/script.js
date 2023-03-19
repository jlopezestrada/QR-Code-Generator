function generateQRCode() {
    var qrText = document.getElementById("qr-text").value;
    var qrCodeURL = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + encodeURIComponent(qrText);
    document.getElementById("qr-code").innerHTML = '<img src="' + qrCodeURL + '">';
  }