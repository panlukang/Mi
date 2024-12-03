// 轮播图功能实现
// 轮播图链接
const img_data = [
    { url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8835531789bb48deb91eedffeff58518.jpg?w=2452&h=920" },
    { url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2caa56930291816d827912646f6e5ee.jpg?thumb=1&w=1839&h=690&f=webp&q=90" },
    { url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f96455c234fb063560c5acd314838de0.jpg?thumb=1&w=1839&h=690&f=webp&q=90" },
    { url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/105e5ca001ebac00630dcbea2f1182bf.jpg?thumb=1&w=1839&h=690&f=webp&q=90" },
    { url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/48027a1ab09d142a08ae0eb884680bf1.jpg?thumb=1&w=1839&h=690&f=webp&q=90" },
    { url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84925c7232b9e483b88f920564d80804.jpg?thumb=1&w=1839&h=690&f=webp&q=90" }
]
// 获取元素
const img = document.querySelector('.home-hero .swiper img') //图片
const next = document.querySelector('.swiper-button-next')  //next按钮
const prev = document.querySelector('.swiper-button-prev')  //prev按钮
// 轮播图计数器
let i = 0
next.addEventListener('click', function () {
    i++
    if (i > 5) {
        i = 0
    }
    toggle()
})
prev.addEventListener('click', function () {
    i--
    if (i < 0) {
        i = 5
    }
    toggle()
})
// 修改图片及圆点样式
function toggle() {
    img.src = img_data[i].url
    document.querySelector('.swiper-pagination-bullet-active').classList.remove('swiper-pagination-bullet-active')
    document.querySelector(`.swiper-pagination-bullet:nth-child(${i + 1})`).classList.add('swiper-pagination-bullet-active')
}
// 自动播放
let timerId = setInterval(function () {
    next.click()
}, 3000)
// 鼠标在图片盒子中停止轮播
const swiper = document.querySelector('.swiper')
swiper.addEventListener('mouseenter', function () {
    clearInterval(timerId)
})
swiper.addEventListener('mouseleave', function () {
    timerId = setInterval(function () {
        next.click()
    }, 3000)
})

//tab切换
const lis = document.querySelectorAll('.box-hd .tab-list li')
console.log(lis)
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function(){
        document.querySelector('.box-hd .tab-list .tab-active').classList.remove('tab-active')
        this.classList.add('tab-active')

        document.querySelectorAll('.tab-box1 .span16 ul').forEach(element=>{
            element.classList.add('hide')
        })
        document.querySelector(`.tab-box1 .span16 ul:nth-child(${i+1})`).classList.remove('hide')
    })
}
