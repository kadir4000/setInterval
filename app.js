const imgsContainer = document.getElementById('images')
const img = document.querySelectorAll("#images img")

const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

let intervel = setInterval(play, 2000);
let idx = 0
// console.log(img)
function play (){
    idx ++

    changeImage()
}

function changeImage(){
  if(idx > img.length - 1){
    idx = 0
  }else if (idx < 0){
    idx=img.length - 1
  }

  imgsContainer.style.transform= `translateX(${-idx * 600}px)`
}

function resetInterval(){
    clearInterval(intervel)
    intervel = setInterval(play, 2000)
}

nextBtn.addEventListener('click', ()=> {
    idx++
    changeImage()
    resetInterval()
})
prevBtn.addEventListener('click', ()=> {
    idx--
    changeImage()
    resetInterval()
})