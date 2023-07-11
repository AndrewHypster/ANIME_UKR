const lists = document.querySelector('.lists')


let index = -lists.offsetHeight

const lists_paralax = () => {
  if (index === lists.offsetHeight) {
    index = -lists.offsetHeight
  }
  lists.style = `
    transform: translate3d(0px, ${index++}px, 0px);
  `
}

setInterval(lists_paralax, 8);