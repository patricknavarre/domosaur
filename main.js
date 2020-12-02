const changeFontSize = () => {
    const changeSize = document.querySelector(".mess-with-me");
    changeSize.style.fontSize = "3em"
}
changeFontSize();

const changeBackgroundColor = () => {
    const changeBackground = document.querySelector("p.mess-with-me");
    changeBackground.style.backgroundColor = "green"
}
changeBackgroundColor();

const makeInvisible = () => {
    const byeNow = document.querySelector('#hide-me');
    byeNow.className = 'invisible';
}
makeInvisible()

const makeItWide = () => {
    const imageLocation = document.querySelector('#triceratops');
    imageLocation.style.width = '324px';
}
makeItWide();

// Event Listener Challenges 

const changeToOrange = document.querySelector(".mess-with-me");
const clickOrange = () => {
    changeToOrange.style.color = 'orange';
}
changeToOrange.addEventListener('click', clickOrange)


const grabForBorder = document.querySelector('#triceratops');
const redBorder = () => {
    grabForBorder.style.border = '10px solid red';
}
grabForBorder.addEventListener('click', redBorder)


const seeThrough = document.querySelector('#feathers');
const iSeeThroughYou = () => {
    seeThrough.style.opacity = '.5'
}
seeThrough.addEventListener('click', iSeeThroughYou)


const getButton = document.querySelector('#toggle');
const switchIt = document.querySelector('#row');
const switchBGcolor = () => {
    switchIt.style.backgroundColor = "lightblue"
}
getButton.addEventListener('click', switchBGcolor)


const notoriousBig = document.querySelector('#biggify');
const makeBig = () => {
    notoriousBig.style.width = '200px'
}
notoriousBig.addEventListener('mouseenter', makeBig)

const smallAgain = document.querySelector('#biggify');
const makeSmall = () => {
    smallAgain.style.width = ''
}
smallAgain.addEventListener('mouseleave', makeSmall)






