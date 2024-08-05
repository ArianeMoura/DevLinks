function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a imagem light
    img.setAttribute('scr', './assets/avatar-light.png')
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('scr', './assets/avatar.png')
  }

}



//  const html = document.documentElement
//   if(html.classList.contains('light')) {
//   html.classList.remove('light')
// } else {
//   html.classList.add('light')
// }