
window.addEventListener('load', () => {
  disableCss('mobile');
  console.log('test');
}) 

const main = document.getElementById('main-css');
const mobile = document.getElementById('mobile-css');

main.addEventListener('click', () => disableCss('mobile'));
mobile.addEventListener('click', () => disableCss('main'));

function disableCss(name) {
  for (let i = 0; i < document.styleSheets.length; i++) {
    let file = document.styleSheets.item(i);
    file.href.includes(name) ? 
    file.disabled = true : 
    file.disabled = false;
    console.log(file.href,'disabled =', file.disabled);
  }
}

function Copy(id) {
  var copyText = document.getElementById(id);
  navigator.clipboard.writeText(copyText.innerText);
}

window.Copy = Copy;