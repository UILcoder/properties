import { data } from '../data.js'
let contain = document.getElementById('section')
let detail_house = document.getElementById('detail_house')
let title = document.getElementById('title')
let content = ''
let shopping_car = []
let index
data.forEach(item => {
  content += `<div class='contain'>
      <div class="image">
        <img
          src='${item.img}' />
      </div>
      <div class="detail">
        <p>${item.protertyName}
          <span>${item.org}</span>
        </p>
      </div>
    </div>`
})
contain.innerHTML = content
let arr = [...document.getElementsByClassName('contain')]
arr.forEach(item => {
  item.onclick = detailInfo
});
setTimeout(() => window.parent.pageHeight(document.body.scrollHeight + 20), 0)
function detailInfo() {
  index = arr.findIndex(i => i == this)
  console.log(data[index])
  let item = data[index]
  detail_house.innerHTML = ` <div class="detail_left">
      <img
        src='${item.img}'>
      <p>${item.inductor}</p>
    </div>
    <div class="detail_right">
      <div class="back">
        <p>X</p>
      </div>
      <div class="shopping_car">
        <img id='img1' src="../image/love.svg" />
        <img id='img2' src="../image/activeLove.svg" style="display: none;">
        <p>add shopping car</p>
      </div>
      <h3>${item.protertyName}
        <span>${item.org}</span >
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
          <p>email ${item.positionName}</p>
        </div>
        <div class="contect"><img src="../image/tel.svg" />
          <p> ${item.tel}</p>
        </div>
        </div>
      </div>
    </div > `
  document.getElementsByClassName('back')[0].onclick = back
  let img1 = document.getElementById('img1')
  let img2 = document.getElementById('img2')
  img1.onclick = add
  img2.onclick = low
  contain.style.display = 'none'
  title.style.display = 'none'
  detail_house.style.display = 'flex'
  addShop()
  setTimeout(() => window.parent.pageHeight(document.body.scrollHeight + 20), 0)
}
function addShop() {
  if (shopping_car.some(i => i == index)) {
    img1.style.display = 'none'
    img2.style.display = 'inline-block'
  }

}
function back() {
  contain.style.display = 'flex'
  title.style.display = 'block'
  detail_house.style.display = 'none'
  window.parent.applicationCache(shopping_car)
}
function add() {
  if (!shopping_car.some(i => i == index)) {
    shopping_car.push(index)
  }

  console.log(data[index], shopping_car)

  img1.style.display = 'none'
  img2.style.display = 'inline-block'
}
function low() {
  shopping_car.splice(index, 1)
  console.log(data[index], shopping_car)
  img2.style.display = 'none'
  img1.style.display = 'inline-block'

}