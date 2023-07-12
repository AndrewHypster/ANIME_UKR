const body = document.querySelector('body')
const lists = document.querySelector('.lists')
const content = document.querySelector('.paralax_content')
const big_title = document.querySelector('.big_title')
const gr_wrapper = document.querySelector('.gr_wrapper')

console.log(document.querySelector('body').offsetWidth);

content.style = `
  width: ${lists.offsetWidht - (content.offsetHeight*4/100)*2}px;
  transform: translate3d(0px, -${(content.offsetHeight/2)+(body.offsetHeight/1.5)}px, 0px);
  height: ${lists.offsetHeight}px;
`

gr_wrapper.style = `
  margin-left: ${gr_wrapper.offsetWidth+gr_wrapper.offsetWidth+gr_wrapper.offsetWidth/5}px;
  transform: translate3d(0px, ${-gr_wrapper.offsetHeight/3}px, 0px);
`

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
