const panTag = document.querySelector("section.panner div.world")

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0

// NEED TO FIND OUT THREE THINGS - WHERE THE MOUSE IS, HOW BIG THE VIEWPORT IS, HOW BIG THE WINDOW IS
document.addEventListener("mousemove", function (event) {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const worldWidth = panTag.clientWidth
  const worldHeight = panTag.clientHeight

  const mouseX = event.pageX
  const mouseY = event.pageY

  const panWidth = worldWidth - windowWidth
  const panHeight = worldHeight - windowHeight //how much space do we actually have?

  const percentageX = mouseX / windowWidth
  const percentageY = mouseY / windowHeight

  aimX = -1 * panWidth * percentageX // NOTE: -1 allows imagery to shift in opposite direction to mouse
  aimY = -1 * panHeight * percentageY

  // NOTE: boundaries have been set and understood above - now let's move some stuff around!

})
// NOTE: TWEENING - so it's not too fast/makes user dizzy
const animate = function () {
  currentX += (aimX - currentX) * 0.05
  currentY += (aimY - currentY) * 0.05

  panTag.style.left = currentX + "px"
  panTag.style.top = currentY + "px"

  requestAnimationFrame(animate)
}

animate()
