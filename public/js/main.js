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
  e.target.value = !x[2] ? x[1] : + x[1] + ' ' + x[2] + (x[3] ? '-' + x[3] : '');
});

var link;
function tel() {
  let tel = document.getElementById("tel").value;
  let ddd = document.getElementById("ddd").value;
  let text = document.getElementById("text").value;
  str = ddd + tel;
  number = str.replace(/-/g, '');
  str1 = number.replace(/\s/g, '');
  link = `https://api.whatsapp.com/send?phone=${encodeURIComponent(str1)}&text=${encodeURIComponent(text)}`
  document.getElementById("link-whats").innerHTML = link;

  document.querySelector('.geracao').classList.add("active");


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

