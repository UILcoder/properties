import { data } from '../data.js'
let contain = document.getElementById('section')
let detail_house = document.getElementById('detail_house')
let title = document.getElementById('title')
let content = ''
let index, inimg1, inimg2, outimg1, outimg2
let shopping_car = localStorage.getItem('shopping_car')
if (shopping_car) {
  shopping_car = shopping_car.split(',')
}
else {
  shopping_car = []
}

data.forEach(item => {
  content += `<div class='contain'>
        <span class='type'>${item.blob}
       </span >
      <div class="image">
        <img
          src='${item.img}' />
      </div>
      <div class="detail">
        <div class ='proterty_name'>
        ${item.protertyName}
          <p>${item.org}
          <img class='img1' src="../image/Love.svg">
          <img class='img2' src="../image/activeLove.svg" style="display: none;">
          </p>
        </div>
      </div>
    </div > `
})
contain.innerHTML = content
let arr = [...document.getElementsByClassName('contain')]
outimg1 = [...document.getElementsByClassName('img1')]
outimg2 = [...document.getElementsByClassName('img2')]
shopping_car.forEach(i => {
  outimg1[i].style.display = 'none'
  outimg2[i].style.display = 'inline-block'
})
arr.forEach(item => {
  item.onclick = detailInfo
});


setTimeout(() => window.parent.pageHeight(document.body.scrollHeight + 20), 0)
function detailInfo() {
  index = arr.findIndex(i => i == this)
  let item = data[index]
  detail_house.innerHTML = ` <div div class="detail_left" >
      <img
        src='${item.img}'>
      <p>${item.inductor}</p>
    </div>
    <div class="detail_right">
      <div class="back">
        <p>X</p>
      </div>
       <span class='type'>${item.blob}
      <b>${item.type}</b >
       </span >    
      <h3>${item.protertyName}
       <img id='img1' src="../image/love.svg" />
         <img id='img2' src="../image/activeLove.svg" style="display: none;">
        <p>${item.org}</p >
      
      </h3 >
      <div class="detail_fact">
        <span>Valuation:</span>
        <p>${item.Valuation}</p>
      </div>
      <div class="detail_fact">
        <span>WALT:</span>
        <p>${item.WALT}</p>
      </div>
      <div class="detail_fact">
        <span>Net Lettable Area (SQM):</span>
        <p>${item.Area}</p>
      </div>
      <div class="detail_fact">
        <span>Passing Yield:</span>
        <p>${item.Yield}</p>
      </div>
      <div class="detail_argent">
      <div class ='detail_argent_contain'>
         <img class='peoImg' src ='${item.peoImg}'/>
        <p>${item.position}</p>
        <h6>${item.positionName}</h6>
        <div class="contect"><img src="../image/email.svg" />
          <span>email ${item.positionName}</span>
        </div>
        <div class="contect"><img src="../image/tel.svg" />
          <span> ${item.tel}</span>
        </div>
        </div>
      </div>
    </div > `
  document.getElementsByClassName('back')[0].onclick = back
  inimg1 = document.getElementById('img1')
  inimg2 = document.getElementById('img2')
  inimg1.onclick = add
  inimg2.onclick = low
  contain.style.display = 'none'
  title.style.display = 'none'
  detail_house.style.display = 'flex'
  addShop()

  setTimeout(() => window.parent.pageHeight(document.body.scrollHeight + 20), 0)
}
function addShop() {
  if (shopping_car.some(i => i == index)) {
    inimg1.style.display = 'none'
    inimg2.style.display = 'inline-block'
  }

}
function back() {
  contain.style.display = 'flex'
  title.style.display = 'block'
  detail_house.style.display = 'none'
  console.log(index)

  // window.parent.applicationCache(shopping_car)
}
function add() {
  if (!shopping_car.some(i => i == index)) {
    shopping_car.push(index)
  }

  console.log(shopping_car, index)
  outimg1[index].style.display = 'none'
  outimg2[index].style.display = 'inline-block'
  inimg1.style.display = 'none'
  inimg2.style.display = 'inline-block'
  localStorage.setItem('shopping_car', shopping_car)
  return false
}
function low() {
  let del = shopping_car.findIndex(i => i == index)
  shopping_car.splice(del, 1)
  outimg2[index].style.display = 'none'
  outimg1[index].style.display = 'inline-block'
  inimg2.style.display = 'none'
  inimg1.style.display = 'inline-block'
  localStorage.setItem('shopping_car', shopping_car)
  return false
}