
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

//const contentAudios = document.getElementById('webreactivaAudios')

/* const getData = async () => {
  const result = await fetch('../audios/audios.json')
    .then(res => res.json())
    .then(json => json.data)
  console.log('result:', result)
  return result
} */


/* const insertData = async () => {
  const audios = await getData()

  console.log(audios)

  for (let i = 0; i < audios.length; i++) {
    console.log(audios[i].title)
    contentAudios.innerHTML = contentAudios.innerHTML + `<div class='contentAudio'> ${audios[i].title} </div>`
  }
} */

//insertData()
