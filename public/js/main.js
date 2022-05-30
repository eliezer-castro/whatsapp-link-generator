const myNum = document.getElementById("ddd");
myNum.addEventListener("keyup", function (e) {
  if (this.value.length === 2) {
    e.preventDefault();
    e.target.nextElementSibling.focus();
    return false;
  }
});

document.getElementById('tel').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : +x[1] + ' ' + x[2] + (x[3] ? '-' + x[3] : '');
});


var link;

function tel() {
  const api ='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
  let tel = document.getElementById("tel").value;
  let ddd = document.getElementById("ddd").value;
  let text = document.getElementById("text").value;
  str = '+55' + ddd + tel;
  number = str.replace(/-/g, '');
  str1 = number.replace(/\s/g, '');
  link = `https://api.whatsapp.com/send?phone=${encodeURIComponent(str1)}&text=${encodeURIComponent(text)}`
  document.getElementById("link-whats").innerHTML = link;
  document.getElementById("qrcode-image").src = api + link;

  

  if (!tel || tel.length === 0 || !ddd || ddd.length === 0) {
    document.querySelector('.error').classList.add("active");
    document.querySelector('.geracao').classList.remove("active");
  } else {
    document.querySelector('.geracao').classList.add("active");
    document.querySelector('.error').classList.remove("active");
  }

}

function copyText() {
  var text = link;
  console.log(text)
  navigator.clipboard.writeText(text);

  document.querySelector('#copiado').classList.add("active");

  setTimeout(() => {
    document.querySelector('#copiado').classList.remove("active");
  }, 3000);
}


var Alltext = "";

function addText(text) {
  Alltext = text
  console.log(Alltext)
  document.getElementById("text").value = Alltext;
}