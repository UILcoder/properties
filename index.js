
let ifm = document.getElementById("myiframe");
let arr = [...document.getElementsByClassName('nav_list')]
let navUrl = ['./proterties/index.html', './about/index.html', './shopping_car/index.html', './tenants/index.html']
let num = 0
let shopval = []
arr[0].className = 'active'
arr.forEach(item => {
  item.onclick = styleActive

});
let fixHeight = document.body.clientHeight - 250
ifm.style.height = fixHeight + 'px'
function styleActive() {
  let index = arr.findIndex(i => i == this)
  arr[num].className = ''
  num = index
  arr[num].className = 'active'
  ifm.src = navUrl[num]
  console.log(shopval)
  if (num == 2) {
    ifm.src += `?val=${shopval}`
  }
}

function applicationCache(val) {
  shopval = val
}
function pageHeight(val) {
  console.log(val, fixHeight)
  if (val > fixHeight) {
    ifm.style.height = val + 'px'
  }
  else {
    ifm.style.height = fixHeight + 'px'
  }
}