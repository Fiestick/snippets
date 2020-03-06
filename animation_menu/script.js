const slideNavigation = document.querySelectorAll('.slide-navigation li')
let counter = 0;
console.log()

slideNavigation.forEach( (li, i) => {
  li.addEventListener('click', function(){
    console.log(i)
    slideNavigation.forEach(link => {
      link.classList.remove('is-active')
    })    
    document.querySelector('.slide-navigation').classList.remove('is-active1')
    document.querySelector('.slide-navigation').classList.remove('is-active2')
    document.querySelector('.slide-navigation').classList.remove('is-active3')
    document.querySelector('.slide-navigation').classList.remove('is-active4')
    li.classList.add('is-active')
    document.querySelector('.slide-navigation').classList.add(`is-active${i+1}`)
  })
})