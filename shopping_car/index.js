import { data } from '../data.js'
let url = document.location.href.split('=')[1]
let contain = document.getElementById('section')
let detail_house = document.getElementById('detail_house')
let content = ''
let shopList = []
let index
if (url) {
  shopList = url.split(',')
  shopList = shopList.map(i => data[i])
  console.log(shopList)
  shopList.map(item => {
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

}

setTimeout(() => window.parent.pageHeight(document.body.scrollHeight + 20), 0)


function detailInfo() {
  index = arr.findIndex(i => i == this)
  console.log(shopList[index])
  let item = shopList[index]
  detail_house.innerHTML = ` <div class="detail_left">
      <img
        src='${item.img}'>
      <p>${item.inductor}</p>
    </div>
    <div class="detail_right">
      <div class="back">
        <p>X</p>
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
  contain.style.display = 'none'
  detail_house.style.display = 'flex'
  addShop()
}
function back() {
  contain.style.display = 'flex'
  detail_house.style.display = 'none'
}
